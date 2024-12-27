import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { fetchPhotos } from "./gallery-api";
import style from "./App.module.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const getPhotos = async () => {
      try {
        if (!query.trim()) return;

        setIsLoading(true);
        const { results, total_pages } = await fetchPhotos(query, page);
        setTotalPages(total_pages);
        setPhotos((prev) => [...prev, ...results]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getPhotos();
  }, [query, page]);

  const handleLoadPage = () => {
    setPage((prev) => prev + 1);
    console.log("pagenum", page);
  };

  const handleQuery = (value) => {
    if (value.trim() === query.trim()) {
      alert("Change query!");
      return;
    }

    setQuery(value);
    setPhotos([]);
  };

  const openModal = (imageData) => {
    setSelectedImage(imageData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={style.container}>
      <SearchBar onSubmit={handleQuery} />
      {isLoading && <Loader />}
      <ImageGallery photos={photos} onImageClick={openModal} />

      {page !== totalPages ? <LoadMoreBtn onLoad={handleLoadPage} /> : ""}

      <ImageModal
        imageData={selectedImage}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;
