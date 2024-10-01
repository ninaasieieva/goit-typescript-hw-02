import css from "../ImageCard/ImageCard.module.css";

export default function ImageCard({
  altDescription,
  urlSmall,
  urlRegular,
  onOpenModal,
  onDataForModal,
}) {
  const data = {
    src: urlRegular,
    alt: altDescription,
  };

  function openModal(data) {
    onDataForModal(data);
    onOpenModal();
  }

  return (
    <div className={css.imageBox}>
      <img
        src={urlSmall}
        alt={altDescription}
        onClick={() => openModal(data)}
      />
    </div>
  );
}