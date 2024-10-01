import { Image } from '../../types/types';
import ImageCard, { ImageCardProps } from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export type ImageGalleryProps = Pick<ImageCardProps, 'openModal'> & {
  images: Image[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={css.gallery}>
      {images.map(({ id, description, urls: { small, regular }, likes }) => (
        <li key={id} className={css.item}>
          <ImageCard
            small={small}
            regular={regular}
            description={description}
            openModal={openModal}
            likes={typeof likes === 'number' ? likes : Number(likes)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
