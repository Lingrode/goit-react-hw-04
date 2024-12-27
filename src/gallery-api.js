import axios from "axios";

const CLIENT_ID = "2bCBi5euBtlvj89IVXpTML-XjVonacitJlDF5GhSZM0";
axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchPhotos = async (query, page) => {
  const { data } = await axios.get(`/search/photos`, {
    params: { client_id: CLIENT_ID, query, page },
  });

  return data;
};
