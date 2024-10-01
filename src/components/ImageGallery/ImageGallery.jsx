import css from "../ImageGallery/ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, onOpenModal, onDataForModal }) {
  return (
    <ul className={css.list}>
      {images.map(({ id, alt_description, urls: { regular, small } }) => {
        return (
          <li className={css.item} key={id}>
            <ImageCard
              altDescription={alt_description}
              urlSmall={small}
              urlRegular={regular}
              onOpenModal={onOpenModal}
              onDataForModal={onDataForModal}
            />
          </li>
        );
      })}
    </ul>
  );
}