import { ICategoryBookList } from "@/lib/types";

import styles from "../../../styles/list.module.css";
import DetailBook from "@/components/detail-book";

const URL = "https://books-api.nomadcoders.workers.dev/list";

export async function getCategoryBookList(
  id: string
): Promise<ICategoryBookList> {
  const response = await fetch(`${URL}?name=${id}`);
  const json = await response.json();
  return json.results;
}

const ListItem = async ({ params: { id } }: { params: { id: string } }) => {
  const categoryBookList: ICategoryBookList = await getCategoryBookList(id);
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{categoryBookList.display_name}</h1>
      <div className={styles.container}>
        {categoryBookList.books.map((book) => (
          <DetailBook
            title={book.title}
            author={book.author}
            image={book.book_image}
            link={book.amazon_product_url}
            key={book.primary_isbn10 + book.primary_isbn13}
          />
        ))}
      </div>
    </main>
  );
};

export default ListItem;
