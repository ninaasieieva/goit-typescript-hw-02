import { FaHeart } from 'react-icons/fa';

import css from './ImageCard.module.css';

export interface ImageCardProps {
  small: string;
  regular: string;
  description: string;
  likes: number;
  openModal: (regular: string, description: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  small,
  regular,
  description,
  openModal,
  likes,
}) => {
  return (
    <div className={css.imageWrapper}>
      <img
        src={small}
        alt={description}
        className={css.image}
        onClick={() => openModal(regular, description)}
      />
      <p className={css.likes}>
        <FaHeart className={css.heartIcon} /> {likes}
      </p>
    </div>
  );
};

export default ImageCard;
