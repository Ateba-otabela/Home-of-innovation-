import React from "react";
import { pages } from "../assets/pages";

//here you are to render the text on the hero section and the images of this section  based on the page you are looking at
//that's pretty simple in react right ..

const HeroSection = ({ currPage }) => {
  return (
    <>
      {currPage} is of type in {pages}
      use it to determine the content of this section
    </>
  );
};
export default HeroSection;
