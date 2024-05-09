import React from "react";
import Link from "next/link";
import Image from "next/image";

const ArticleList = () => {
  return (
    <div>
      <article>
        <Link href="#">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
            alt=""
            width={1280}
            height={300}
          ></Image>
        </Link>
        <div>
          <Link href="#">Technology</Link>
          <Link href="#">Next.js Learning</Link>
          <p>by yu-to06. Published on May 09 2024</p>
          <Link href="#">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quae
            vel cupiditate quod reprehenderit minus a enim sunt aliquam aperiam
            voluptatem dolorem asperiores iure et consequatur, id autem. Rerum,
            assumenda.
          </Link>
          <Link href="#">続きを読む</Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
