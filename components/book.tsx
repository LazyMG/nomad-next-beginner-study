import Link from "next/link";
import React from "react";

import styles from "../styles/book.module.css";

interface BookProps {
  display_name: string;
  id: string;
}

const Book = ({ display_name, id }: BookProps) => {
  return (
    <div className={styles.box}>
      <Link href={`/list/${id}`}>{display_name}&rarr;</Link>
    </div>
  );
};

export default Book;
