import React, { useState, useEffect } from 'react';
import './App.css';
import ImageGrid from './ImageGrid';
import { fetchImages } from './api';
import Header from './Header';

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMoreImages = async () => {
    setLoading(true);
    try {
      const newImages = await fetchImages(page + 1, 10); // Change limit as needed
      setImages([...images, ...newImages]);
      setPage(page + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const initialLoad = async () => {
      try {
        const initialImages = await fetchImages(page, 10); // Change limit as needed
        setImages(initialImages);
      } catch (error) {
        console.error(error);
      }
    };

    initialLoad();
  }, [page]);

  return (
    <div className="App">
      <Header />
      <h1>Image Gallery</h1>
      <ImageGrid images={images} />
      <div className="load-more-container">
      {loading ? (
        <p>Loading...</p>
        
      ) : (
        <button className="load-more-button" onClick={loadMoreImages}>Load More</button>
      )}
    </div>
    </div>
  );
}

export default App;
