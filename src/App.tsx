import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";

export function App() {
  const posts: PostType[] = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/NaumMarcirio.png",
        name: "Naum Marcirio",
        role: "Estagiário Front-End",
      },
      content: [
        { type: "paragraph", content: "Fala galera!!" },
        {
          type: "paragraph",
          content:
            " É um projeto que fiz no curso rocketset de react, chamado ignite feed.",
        },
        {
          type: "link",
          content: "https://github.com/NaumMarcirio/Ignite-feed",
        },
      ],
      publishedAt: new Date("2024-05-03 14:14:05"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/NaumMarcirio.png",
        name: "Naum Marcirio",
        role: "Estagiário Front-End",
      },
      content: [
        { type: "paragraph", content: "Eae galera!!" },
        {
          type: "paragraph",
          content:
            " É um projeto que fiz no curso rocketset de react, chamado ignite feed.",
        },
        {
          type: "link",
          content: "https://github.com/NaumMarcirio/Ignite-feed",
        },
      ],
      publishedAt: new Date("2024-05-03 15:14:05"),
    },
  ];

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </>
  );
}
