import React, { useState, useEffect } from "react";
import axios from "axios";
import ImagePopup from "./ImagePopUp";
import Layout from "./Layout";

function UnsplashImageFetcher() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (searchTerm) => {
    // Handle the search, e.g., make an API request with searchTerm
    setSearchTerm(searchTerm);
  };
  const openImagePopup = (image) => {
    if (image) {
      setSelectedImage(image);
      setIsPopupOpen(true);
    }
  };

  const closeImagePopup = () => {
    setSelectedImage(null);
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const apiKey = "nBZypcSVaA66JSYI8GNQGWoLCudEFwQ3nEiZWBwvg8E";

    const fetchData = async (url) => {
      try {
        const response = await axios.get(url, {
          params: {
            count: 10, // Number of images to fetch
            query: searchTerm,
          },
          headers: {
            Authorization: `Client-ID ${apiKey}`,
          },
        });
        console.log(Array.isArray(response.data.results));
        if (Array.isArray(response.data)) {
          setImages(response.data);
        } else {
          setImages(response.data.results); // Set images to an empty array if data is not an array
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching images from Unsplash:", error);
        setLoading(false);
      }
    };

    const initialFetchUrl = "https://api.unsplash.com/photos/random";
    const searchFetchUrl = "https://api.unsplash.com/search/photos";
    if (searchTerm) {
      fetchData(searchFetchUrl); // Fetch with search term
    } else {
      fetchData(initialFetchUrl); // Fetch without search term
    }
  }, [searchTerm]);

  return (
    <div>
      <Layout onSearch={handleSearch} />
      <div className="image-container text-center">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
            onClick={() => openImagePopup(image)}
          />
        ))}
      </div>
      <ImagePopup
        isOpen={isPopupOpen}
        image={selectedImage}
        onRequestClose={closeImagePopup}
      />
    </div>
  );
}

export default UnsplashImageFetcher;
