import dynamic from "next/dynamic";
import Image from "next/image";
import format from "date-fns/format";

export async function generateMetadata({
  params,
}: {
  params: { articleId: string };
}) {
  const { articleId } = params;

  const jsonMdxData = (
    await import(`@/components/articles/${articleId}/data.json`, {
      type: "json",
    })
  ).default;

  return {
    title: jsonMdxData.title,
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
  };
}

export default async function Article({
  params,
}: {
  params: { articleId: string };
}) {
  const { articleId } = params;

  const MdxComponent = await dynamic(
    () => import(`@/components/articles/${articleId}/content.mdx`),
    { ssr: true }
  );

  const jsonMdxData = (
    await import(`@/components/articles/${articleId}/data.json`, {
      type: "json",
    })
  ).default;

  const { title, imagePath, date, readTime } = jsonMdxData;

  return (
    <div className="min-h-full bg-black text-white w-full px-4">
      <div className="min-h-full max-w-4xl mx-auto pt-5">
        <h1 className="font-display text-3xl font-medium tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="text-gray-400 my-5">
          {format(new Date(date), "MMMM do, yyyy")} — {readTime}
        </p>
        <div className="mx-auto flex justify-center mb-10 h-96 relative">
          <Image
            src={`/articles/${imagePath}`}
            alt="Vercel Logo"
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 20vw"
            priority
            fill
            className="object-cover sm:object-contain"
          />
        </div>
        <div className="bg-black border-t border-t-gray-400 mb-5 sm:mb-10" />
        <article className="prose prose-invert md:prose-lg lg:prose-xl max-w-none pb-32">
          <MdxComponent />
        </article>
      </div>
    </div>
  );
}
