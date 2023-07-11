import Link from "next/link";

const getPosts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    {
      next: {
        revalidate: 1,
      },
    }
  );

  return response.json();
};

export const metadata = {
  title: "BLOG | Test Blog APP",
  description: "Mick Nep free course app",
};

const Blog = async () => {
  const posts = await getPosts();

  return (
    <>
      <h1>BLOG</h1>

      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
