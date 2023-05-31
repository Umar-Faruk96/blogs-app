import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Link,
} from "@mui/material/";

const News = ({ article }) => {
  const { title, content, description, urlToImage, url } = article;

  return (
    <>
      <Grid item xs={12} sm={12} md={12} lg={3} container>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={urlToImage} title={content} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h4">
              {`${title.slice(0, 30)}.....`}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {description ? `${description.slice(0, 100)}....` : ""}
            </Typography>
          </CardContent>
          <CardActions>
            <Link href={url}>
              <Button variant="contained" color="success">
                Go To The Site
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default News;
