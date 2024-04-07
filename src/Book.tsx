import { BookType } from "./types";

export function Book({ coverAddress, title, author, position }: BookType) {
  return (
    <div className="book">
      <img src={coverAddress} />
      <p className="book-rank">#{position + 1}</p>
      <h2>{title}</h2>
      <h3>{author}</h3>
    </div>
  );
}
