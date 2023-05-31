import { Container, Grid, Typography } from "@mui/material";
import News from "./components/News/News";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);

  //? fetch news from https://newsapi.org//v2/top-headlines?country=us&apiKey=f0694b3a448f4edaa0b4fb363377a7cd
  /* useEffect(() => {
    const url =
      "https://newsapi.org//v2/top-headlines?country=us&apiKey=f0694b3a448f4edaa0b4fb363377a7cd";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []); */

  //? load data with axios HTTP client
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=f0694b3a448f4edaa0b4fb363377a7cd"
      )
      .then((response) => setArticles(response.data.articles))
      .catch((error) => console.log(error.message));
  });

  return (
    <>
      <Container maxWidth="xl" sx={{ my: 3 }}>
        <Typography
          gutterBottom
          variant="h4"
          component="h2"
          sx={{ textAlign: "center", color: "info.main" }}
        >
          Breaking News : ({articles.length})
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {articles.map((article) => (
            <News key={article.publishedAt} article={article} />
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
