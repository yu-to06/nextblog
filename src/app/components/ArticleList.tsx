import React from "react";
import Link from "next/link";
import Image from "next/image";

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=3"
            alt=""
            width={1280}
            height={300}
          ></Image>
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-500 text-3xl font-bold pb-4 hover:text-gray-700"
          >
            Next.js Learning
          </Link>
          <p className="text-sm pb-3 text-slate-500">
            {" "}
            Published on May 09 2024
          </p>
          <Link href="#" className="text-slate-500 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quae
            vel cupiditate quod reprehenderit minus a enim sunt aliquam aperiam
            voluptatem dolorem asperiores iure et consequatur, id autem. Rerum,
            assumenda.
          </Link>
          <Link href="#" className="text-pink-500 hover:text-blue-700">
            続きを読む
          </Link>
        </div>
      </article>
      <article className="shadow my-4">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=4"
            alt=""
            width={1280}
            height={300}
          ></Image>
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-500 text-3xl font-bold pb-4 hover:text-gray-700"
          >
            Next.js Learning
          </Link>
          <p className="text-sm pb-3 text-slate-500">
            {" "}
            Published on May 09 2024
          </p>
          <Link href="#" className="text-slate-500 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quae
            vel cupiditate quod reprehenderit minus a enim sunt aliquam aperiam
            voluptatem dolorem asperiores iure et consequatur, id autem. Rerum,
            assumenda.
          </Link>
          <Link href="#" className="text-pink-500 hover:text-blue-700">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
