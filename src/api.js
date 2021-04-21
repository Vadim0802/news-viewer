const API_KEY = "1737e185524c443a9038d99d59229938";
const REQUEST_URL = new URL(
  `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`
);

const getLatestNews = async (country) => {
  REQUEST_URL.searchParams.set("country", country);
  const response = await fetch(REQUEST_URL).then((res) => res.json());
  return response.articles.map((item) => ({
    title: item.title,
    description: item.description,
    url: item.url,
  }));
};

export { getLatestNews };
