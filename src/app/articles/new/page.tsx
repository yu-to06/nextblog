"use client";
import React, {useState} from "react";
import {createArticle} from "../../../blogAPI";
import {useRouter} from "next/navigation";
import {FaSpinner} from "react-icons/fa";

const CreateBlogPage = () => {
  const router = useRouter();
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (evnet: React.FormEvent<HTMLFormElement>) => {
    evnet.preventDefault();
    setLoading(true);
    // await createArticle(id, title, content);
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    await fetch(`${API_URL}/api/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id, title, content}),
    });

    setLoading(false);
    router.push("/");
    router.refresh();
  };

  return (
    <div className='min-h-screen py-8 px-4 md:px-12'>
      <h2 className='text-2xl font-bold mb-4'>Create New Blog</h2>
      <form
        className='bg-slate-200 p-6 rounded shadow-lg'
        onSubmit={handleSubmit}
      >
        <div className='mb-4'>
          <label className='text-gray-700 text-sm font-bold mb-2'>URL</label>
          <input
            type='text'
            className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
            onChange={(event) => setId(event.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='text-gray-700 text-sm font-bold mb-2'>Title</label>
          <input
            type='text'
            className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='text-gray-700 text-sm font-bold mb-2'>
            Contents
          </label>
          <textarea
            className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
            onChange={(event) => setContent(event.target.value)}
          />
        </div>
        <button
          type='submit'
          className={`py-2 px-4 border rounded-md bg-orange-400 ${
            loading
              ? "bg-orange-300 cursor-not-allowed"
              : " hover:bg-orange-600"
          }`}
          disabled={loading}
        >
          {loading ? <FaSpinner className='w-4 h-4 animate-spin' /> : "Post"}
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
