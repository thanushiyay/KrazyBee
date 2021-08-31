import React from "react";
import { useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { useState } from "react";
import "./Album.scss";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LazyLoad from "react-lazyload";
import Spinner from "./Spinner";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    }
  };


export default function CarouselWrap({ albumId }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?albumId=" + albumId)
      .then((response) => {
        setPhotos(response.data);
      });
  }, [albumId]);

  return (
    <div className="carouselContainer">
      <Carousel responsive={responsive}>
        {photos?.map((item) => {
          return (
            <LazyLoad key={item.id}
                     width="200"
                     placeholder={<Spinner />}
                     >
                <Card photoDet={item}></Card>
            </LazyLoad>   
          )
        })}
      </Carousel>
    </div>
  );
}
