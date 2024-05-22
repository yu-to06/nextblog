import React from "react";
import {Article} from "../../types";
import Link from "next/link";
import Image from "next/image";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({article}: ArticleCardProps) => {
  return (
    <>
      <article className='shadow my-4' key={article.id}>
        <Link href={`articles/${article.id}`} className='hover:opacity-75'>
          <Image
            src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
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
          <p className='text-sm pb-3 text-slate-500'> {article.createdAt}</p>
          <Link href={`articles/${article.id}`} className='text-slate-500 pb-6'>
            {article.content.length > 70
              ? article.content.substring(0, 70) + "..."
              : article.content}
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
  );
};

export default ArticleCard;
