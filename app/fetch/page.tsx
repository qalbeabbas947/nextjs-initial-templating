
import { Suspense } from 'react';
import { Metadata } from "next";  

export const metadata: Metadata = {
  title: "fetching page",
  description: "Learn fetching page",
  openGraph: {
    siteName: "fetching page",
    title: "Qalb Abbas",    
  },
  twitter: {
    card: "summary_large_image",
    title:"Twitter sharing card",
    description: "Learn fetching page",
    images: ["/og-image.png"]
  }
}

interface Post {
    id: number;
    title: string;
    body: string;
}

async function Posts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache : "no-store", //for dynamic reloading using any of these options.
        //next : { revalidate: 10 } //for dynamic reloading using any of these options.
    });
    const posts: Post[] = await res.json();

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id} style={{margin: "20px"}}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    );
}

export default function FetchPage() {
    return (
        <>
            <h1>Posts</h1>
            <Suspense fallback={<p>Loading posts...</p>}>
                <Posts />
            </Suspense>
        </>
    );
}