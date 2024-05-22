import {Article} from "./types";
import {notFound} from "next/navigation";

export const getAllArticles = async (): Promise<Article[]> => {
  // SSR
  const res = await fetch(`http://localhost:3001/posts`, {cache: "no-store"});

  if (!res.ok) {
    throw new Error("Error is occured by blogAPI.ts line 6");
  }

  const articles = await res.json();
  return articles;
};

export const createArticle = async (
  id: string,
  title: string,
  content: string
): Promise<Article> => {
  const currentDatetime = new Date().toISOString();
  const res = await fetch(`http://localhost:3001/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({id, title, content, createdAt: currentDatetime}),
  });

  if (!res.ok) {
    throw new Error("Error is occured by blogAPI.ts line 6");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newArticles = await res.json();
  return newArticles;
};

export const getDetailArticle = async (id: string): Promise<Article> => {
  // ISR
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    next: {revalidate: 60},
  });

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("Error is occured by blogAPI.ts line 18");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const articles = await res.json();
  return articles;
};
