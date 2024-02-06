import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useGlobalContext } from "./context";
const URL =
  `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`;
  // console.log(import.meta.env.VITE_API_KEY);

const Gallery = () => {

   const {searchTerm} = useGlobalContext();
  const response = useQuery({
    queryKey: ["image",searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${URL}&query=${searchTerm}`);
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (response.error) {
    return (
      <section className="image-container">
        <h4>There was an Error...</h4>
      </section>
    );
  }

  const result = response.data.results;
  if (result.length < 1) {
    return (
      <section className="image-container">
        <h4>No result found...</h4>
      </section>
    );
  }

  if (response.error) {
    return (
      <section className="image-container">
        <h4>Error ...</h4>
      </section>
    );
  }

  //   console.log(response);
  return (
    <section className="image-container">
      {result.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
