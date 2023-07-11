import { Metadata } from "next";
import * as React from "react";

const getPost = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
};

interface PostProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params: { id },
}: PostProps): Promise<Metadata> {
  const post = await getPost(id);

  return {
    title: `${post.title} | Test Blog APP`,
  };
}

const Post = async ({ params: { id } }: PostProps) => {
  const post = await getPost(id);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

export default Post;
