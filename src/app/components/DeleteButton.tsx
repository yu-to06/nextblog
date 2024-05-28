"use client";

import React from "react";
import {deleteArticle} from "../../blogAPI";
import {useRouter} from "next/navigation";

type DeleteButtonProps = {
  id: string;
};
const DeleteButton = ({id}: DeleteButtonProps) => {
  const router = useRouter();
  const handleDelete = async () => {
    // await deleteArticle(id);
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    await fetch(`${API_URL}/api/${id}`, {
      method: "DELETE",
    });

    router.push("/");
    router.refresh();
  };
  return (
    <div
      className='bg-red-500 hover:bg-red-600 rounded-md py-2 px-5 inline cursor-pointer'
      onClick={handleDelete}
    >
      Delete
    </div>
  );
};

export default DeleteButton;
