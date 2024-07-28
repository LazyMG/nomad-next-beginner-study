import Book from "@/components/book";
import { IBookList } from "@/lib/types";
import styles from "../../styles/home.module.css";
import { Metadata } from "next";

const URL = "https://books-api.nomadcoders.workers.dev/lists";

export const metadata: Metadata = {
  title: "Home",
};

async function getAllBookList(): Promise<IBookList[]> {
  const response = await fetch(`${URL}`);
  const json = await response.json();
  return json.results;
}

export default async function Home() {
  const bookList: IBookList[] = await getAllBookList();
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Book Lists</h1>
      <div className={styles.container}>
        {bookList.map((book) => (
          <Book
            key={book.list_name_encoded}
            id={book.list_name_encoded}
            display_name={book.display_name}
          />
        ))}
      </div>
    </main>
  );
}
