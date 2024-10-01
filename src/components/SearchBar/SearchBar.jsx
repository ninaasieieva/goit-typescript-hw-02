import toast, { Toaster } from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import css from "../SearchBar/SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const notify = () =>
    toast("Please, fill in the input field", {
      icon: "⌨️",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const value = form.elements.search.value;

    if (!value) notify();

    onSubmit(value);
    form.reset();
  }

  return (
    <header className={css.header}>
      <Toaster position="top-center" />
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.inputIconWrapper}>
          <FaSearch className={css.icon} />
          <input
            className={css.input}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </div>
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}