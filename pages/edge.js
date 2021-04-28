import { client } from "../lib/gql";
import { gql } from "@apollo/client";

async function GetBlogPostTitle() {
    var { data } = await client.query({
        query: gql`
        {
            BlogPosts: allM_Content_Blog(first:1) {
                results {
                  Title: blog_Title
                }
              }
        }
      `,
    });
    return data.BlogPosts.results[0];
}

export async function getStaticProps() {
    const blogTitle = await GetBlogPostTitle();

    return {
        props: {
            blogTitle: blogTitle,
        },
        revalidate: 5
    };
}

export default function Edge(props) {
    return (
        <div className="flex h-screen justify-center items-center">
            <p className="text-3xl">{props.blogTitle.Title}</p>
        </div>
    );
}