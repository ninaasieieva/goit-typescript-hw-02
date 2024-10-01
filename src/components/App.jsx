import { useState, useEffect } from "react";
import { fetchImages } from './apiService/images';
import css from './App.module.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const [showBtn, setShowBtn] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dataForModal, setDataForModal] = useState({});

  useEffect(() => {
    if (!query) return;

    async function getImages() {
      try {
        setLoading(true);
        setError(false);
        const res = await fetchImages(query, page);
        setImages((prev) => [...prev, ...res.images]);
        setTotalPages(res.totalPages);
        setShowBtn(totalPages && totalPages !== page);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  function handleSearch(value) {
    setQuery(value);
    setPage(1);
    setImages([]);
  }

  function handleLoadMore() {
    setPage(page + 1);
  }

  function handleDataForModal(data) {
    setDataForModal(data);
  }

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && (
        <ImageGallery
          images={images}
          onOpenModal={openModal}
          onDataForModal={handleDataForModal}
        />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && showBtn && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        dataForModal={dataForModal}
        onCloseModal={closeModal}
        modalIsOpen={modalIsOpen}
      />
    </div>
  );
}