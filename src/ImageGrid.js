import React from 'react';

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((image) => (
        <div key={image.id} className="image-item">
          <img src={image.download_url} alt={image.author} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
