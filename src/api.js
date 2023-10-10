const API_URL = 'https://picsum.photos/v2/list';

export const fetchImages = async (page, limit) => {
  try {
    const response = await fetch(`${API_URL}?page=${page}&limit=${limit}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Error fetching images: ${error.message}`);
  }
};
