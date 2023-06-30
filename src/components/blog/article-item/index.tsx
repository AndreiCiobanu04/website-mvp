import Link from "next/link";
import Image from "next/image";
import format from "date-fns/format";

export default function ArticleItem({ article }) {
  const { title, imagePath, date, readTime, articleId } = article;

  return (
    <div className="border-gray-800 border mx-10 p-5 text-left w-72 h-96">
      <Link href={`/blog/${articleId}`}>
        <div className="group relative h-44 transform overflow-hidden rounded-4x">
          <div className="absolute bottom-6 left-0 right-4 top-0 rounded-4xl transition duration-300 group-hover:scale-95 xl:right-6" />
          <div
            className="absolute inset-0 bg-transparent"
            style={{ clipPath: "url(#:R9m:-0)" }}
          >
            <Image
              src={`/articles/${imagePath}`}
              alt="Vercel Logo"
              priority
              width={280}
              height={300}
              className="bg-black absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
            />
          </div>
        </div>
        <p className="text-gray-400 my-3 text-sm">
          {format(new Date(date), "MMMM do, yyyy")} — {readTime}
        </p>
        <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-white">
          {title}
        </h3>
      </Link>
    </div>
  );
}
