import styles from "../styles/detail-book.module.css";
import Link from "next/link";

interface DetailBookProps {
  title: string;
  author: string;
  image: string;
  link: string;
}

const DetailBook = ({ title, author, image, link }: DetailBookProps) => {
  return (
    <div className={styles.box}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>
        <h5 className={styles.author}>{author}</h5>
        <Link className={styles.link} href={link} target="_blank">
          Buy Link
        </Link>
      </div>
    </div>
  );
};

export default DetailBook;
