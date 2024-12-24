import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Layout from "../components/layout";
import { getPosts } from "../../lib/posts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const getStaticProps = async () => {
  return {
    props: {
      posts: getPosts(),
    },
  };
};

export default function Home({ posts }) {
  console.log(posts);
  return (
    <Layout pageTitle="Home">
      <Link href="/about">About</Link>
      <ul>
        {posts.map(({ title, url }) => {
          return (
            <li>
              <Link href={`posts/${url}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
