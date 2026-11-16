interface BlogPageProps {
    params: {
        slug: string;
    }
}

const blogData : Record<string, {title: string, content: string}> = {
    "nextjs": {
        title: "Next Js",
        content: "This is next js blog page."
    },
    "react": {
        title: "React Js",
        content: "This is React js blog page."
    },
    "node": {
        title: "Node Js",
        content: "This is Node js blog page."
    }
}

export default async function BlogDetailsPage({params}: BlogPageProps) {
    const {slug} = await params;
    const blog = blogData[slug];

    if( !blog ) {
        return <h1>Page not found!</h1>
    }

    return(
        <>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </>
    )
}