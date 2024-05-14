import axios from "axios";

interface ApiResponse<T> {
  results: T;
  total_pages: number;
}

const accessKey = "FNo34P4mRw9F3UdsG0yFmktyyZ6CJmRITbCpFoAH0zY";

const response = axios.create({
  baseURL: "https://api.unsplash.com",
});

export const requestImagesByQuery = async <T>(
  query: string = "",
  page: number = 1
): Promise<ApiResponse<T>> => {
  const perPage = 15;
  const { data } = await response.get(
    `/search/photos/?client_id=${accessKey}&query=${query}&per_page=${perPage}&page=${page}`
  );
  return {
    results: data.results,
    total_pages: data.total_pages,
  };
};