import css from "../ErrorMessage/ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={css.error}>
      there were some problems, please try to repeat your request again!
    </p>
  );
}