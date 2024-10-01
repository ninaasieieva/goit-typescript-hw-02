import css from "../LoadMoreBtn/LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <button className={css.button} onClick={onClick} type="button">
      Load more
    </button>
  );
}