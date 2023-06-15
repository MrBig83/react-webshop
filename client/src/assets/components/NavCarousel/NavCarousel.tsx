import React from "react";
import { Carousel } from "antd";
// import "./NavCarousel.css";
const contentStyle: React.CSSProperties = {
  height: "auto",
  width: "100%",
  display: "flex",
  color: "#fff",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  background: "#f6f6f6f6",
};

const imageStyle: React.CSSProperties = {
  ...contentStyle,
  minWidth: "100%",
  maxHeight: "60vh",
  objectFit: "cover",
  justifyContent: "center",
};
const NavCarousel: React.FC = () => (
  <Carousel autoplay className="navcarousel">
    <div>
      <img
        className="slideone"
        src="/midsommar.svg"
        alt="Slide 1"
        style={imageStyle}
      />
    </div>
    <div>
      <img
        className="slidetwo"
        src="/beautyawards.svg"
        alt="Slide 2"
        style={imageStyle}
      />
    </div>

    <div>
      <img
        className="slidethree"
        src="/sommar_doft.svg"
        alt="Slide 3"
        style={imageStyle}
      />
    </div>
    <div>
      <img
        className="slidefour"
        src="/solkram.svg"
        alt="Slide 4"
        style={imageStyle}
      />
    </div>
  </Carousel>
);

export default NavCarousel;
