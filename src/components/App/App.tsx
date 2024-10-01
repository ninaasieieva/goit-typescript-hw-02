import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { fetchImagesByQuery } from '../../services/api';
import { RiEmotionSadLine } from 'react-icons/ri';

import SearchBar from '../SearchBar/SearchBar';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { FetchImages, Image, ModalImage } from '../../types/types';
import './App.css';

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [query, setQuery] = useState<string>('');
  const [modalImage, setModalImage] = useState<ModalImage>({
    isOpen: false,
    imgUrl: '',
    imgAlt: '',
    description: '',
  });
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  // const [setShowImages] = useState<boolean>(false);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    setError(null);
    const fetchImages = async () => {
      try {
        const { results, total, total_pages }: FetchImages =
          await fetchImagesByQuery(query, page);

        if (total === 0) {
          toast('There are no pictures for your request', {
            icon: <RiEmotionSadLine />,
          });

          setImages([]);
          setTotalPages(0);
          setShowBtn(false);
          return;
        }

        setImages(prevImages =>
          page === 1 ? results : [...prevImages, ...results]
        );

        setTotalPages(total_pages);
        setShowBtn(page < total_pages);
      } catch (err: unknown) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
        // setShowImages(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSubmit = (searchQuery: string): void => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
    // setShowImages(true);
  };

  const handleLoadMoreBtn = (): void => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = (regular: string, description: string): void => {
    setModalImage({ isOpen: true, imgUrl: regular, imgAlt: '', description });
  };
  const closeModal = (): void => {
    setModalImage({ isOpen: false, imgUrl: '', imgAlt: '', description: '' });
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}
      <ImageGallery images={images} openModal={openModal} />
      {showBtn && <LoadMoreBtn onClick={handleLoadMoreBtn} />}

      <ImageModal
        isOpen={modalImage.isOpen}
        onClose={closeModal}
        imgUrl={modalImage.imgUrl}
        imgAlt={modalImage.imgAlt}
        description={modalImage.description}
      />
    </div>
  );
};

export default App;
