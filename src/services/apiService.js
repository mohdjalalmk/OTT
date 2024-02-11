// apiService.js
const apiService = async (offset) => {
    try {
        const response = await fetch('http://demo0198957.mockable.io/page' + offset);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error; // Re-throw the error to propagate it to the calling code
    }
  };
  
  export default apiService;
  