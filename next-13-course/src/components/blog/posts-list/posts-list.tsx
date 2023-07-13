"use client";
import Link from "next/link";
import * as React from "react";
import * as C from "@/components";

interface PostsListProps {}

const getPosts = async (search?: string) => {
  const endpoint = `https://jsonplaceholder.typicode.com/posts?_limit=10&${
    search ? `q=${search}` : ""
  }`;
  const posts = await fetch(endpoint);
  return posts.json();
};

const PostsList: React.FC<PostsListProps> = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);

  const handleSearch = async (search) => {
    getPosts(search).then((data) => setPosts(data));
  };

  return (
    <div>
      <C.Search onSearch={handleSearch} />

      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PostsList;
