import Link from "next/link";

const blogs = [
  { slug: "/admin/blog/nextjs", title: "Next Js"},
  { slug: "/admin/blog/react", title: "React Js"},
  { slug: "/admin/blog/node", title: "Node Js"},
];

export default function Home() {
  return (
    <div>
      <main>
        <ul>
              {blogs.map((blog) => (
                <li key={blog.title}><Link href={blog.slug}>{blog.title}</Link></li>
              ))}
        </ul>
        
      </main>
    </div>
  );
}
