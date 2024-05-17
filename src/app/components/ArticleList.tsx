import React from "react";
import Link from "next/link";
import Image from "next/image";
import {Article} from "../../types";

type ArticleListProps = {
  articles: Article[];
};
const ArticleList = ({articles}: ArticleListProps) => {
  return (
    <div>
      {articles.map((article) => (
        <>
          <article className='shadow my-4' key={article.id}>
            <Link href={`articles/${article.id}`} className='hover:opacity-75'>
              <Image
                src='https://source.unsplash.com/collection/1346951/1000x500?sig=3'
                alt=''
                width={1280}
                height={300}
              ></Image>
            </Link>
            <div className='bg-white flex flex-col justify-start p-6'>
              <Link href='#' className='text-blue-700 pb-4 font-bold'>
                Technology
              </Link>
              <Link
                href={`articles/${article.id}`}
                className='text-slate-500 text-3xl font-bold pb-4 hover:text-gray-700'
              >
                {article.title}
              </Link>
              <p className='text-sm pb-3 text-slate-500'>
                {" "}
                {article.createdAt}
              </p>
              <Link
                href={`articles/${article.id}`}
                className='text-slate-500 pb-6'
              >
                {article.content}
              </Link>
              <Link
                href={`articles/${article.id}`}
                className='text-pink-500 hover:text-blue-700'
              >
                続きを読む
              </Link>
            </div>
          </article>
        </>
      ))}
    </div>
  );
};

export default ArticleList;
