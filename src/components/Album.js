import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./Album.scss";
import CarouselWrap from "./CarouselWrap";
import LazyLoad from "react-lazyload";
import Spinner from "./Spinner";

export default function Album() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        setAlbums(response.data);
      });
  }, []);

  return (
    <div className="albumsWrapper">
      {albums.map((item) => {
        return (
          <LazyLoad
            key={item.id}
            height={300}
            offset={[-100,100]}
            placeholder={<Spinner/>}
            >
            <div className="albumContainer">
              <div className="header">
                {item.title}
                <div className="subHeader">
                  {"id :" + item.id + ", userid : " + item.userId}
                </div>
              </div>
              <CarouselWrap albumId={item.id}></CarouselWrap>
            </div>
          </LazyLoad>
        );
      })}
    </div>
  );
}
