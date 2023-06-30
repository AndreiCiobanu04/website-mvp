import path from "path";
import { sync } from "glob";
import BlogPage from "@/components/blog/blog-page";
import compareDesc from "date-fns/compareDesc";

export default async function Blog() {
  const articlesPath = path.join(process.cwd(), "src/components/articles");
  const paths = sync(`${articlesPath}/*`);

  const articles = paths.map((path) => {
    const pathContent = path.split("/");
    const fileName = pathContent[pathContent.length - 1];
    const [slug, _extension] = fileName.split(".");
    return slug;
  });

  const jsonArticlesRequests = articles.map(
    (articleId) =>
      import(`@/components/articles/${articleId}/data.json`, {
        type: "json",
      })
  );

  const jsonArticlesData = (await Promise.all(jsonArticlesRequests)).map(
    (result) => result.default
  );

  const articlesData = jsonArticlesData.sort((a1, a2) =>
    compareDesc(new Date(a1.date), new Date(a2.date))
  );

  return (
    <main className="min-h-full h-full">
      <BlogPage articlesData={articlesData} />
    </main>
  );
}
