"use client";

import Image from "next/image";
import bookPicture from "../../../../public/3d_book.png";
import Search from "@/components/blog/search";
import ArticleItem from "@/components/blog/article-item";
import { useState } from "react";

const BlogPage = ({ articlesData }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJsonArticles = articlesData?.filter((jsonArticleData) =>
    jsonArticleData?.title?.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  return (
    <div className="bg-black min-h-full">
      <div className="flex flex-col mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 text-center lg:pt-12">
        <div className="flex w-full flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 text-white flex flex-col justify-center">
            <h1 className="font-semibold my-5 text-3xl sm:text-5xl">
              Explore insightful articles
            </h1>
            <p className="text-xl text-gray-400">
              Expand your knowledge on web development.
            </p>
            <div className="flex w-full justify-center sm:hidden">
              <div className="mx-auto my-auto flex">
                <Image
                  src={bookPicture}
                  alt="3d_book"
                  quality={60}
                  width={320}
                  height={320}
                  priority
                />
              </div>
            </div>
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
          <div className="hidden w-1/2 justify-center sm:flex">
            <div className="mx-auto my-auto flex">
              <Image
                src={bookPicture}
                alt="3d_book"
                className="md:w-96"
                width={320}
                height={320}
                quality={60}
                priority
              />
            </div>
          </div>
        </div>
        <div className="hidden flex-wrap justify-center mb-10">
          {new Array(10).fill(0).map((v, index) => (
            <div key={index}>
              <input
                id={`checkbox-${index}`}
                className="sr-only peer"
                type="checkbox"
              />
              <label
                htmlFor={`checkbox-${index}`}
                className="peer-checked:bg-white peer-checked:text-black relative mb-4 mr-4 block h-auto w-auto cursor-pointer rounded-full px-6 py-3 transition text-primary bg-gray-800 focus-ring opacity-100 text-white"
              >
                <span>react</span>
              </label>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap h-full gap-10 min-h-[50rem] pb-20">
          {filteredJsonArticles?.length ? (
            filteredJsonArticles.map((article) => (
              <ArticleItem key={article.articleId} article={article} />
            ))
          ) : (
            <div className="h-96 flex items-center mx-auto text-gray-400 text-3xl">
              No results
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
