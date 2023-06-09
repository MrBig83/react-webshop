import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "30rem",
  width: "100%",
  display: "flex",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#f6f6f6f6",
};
const imageStyle: React.CSSProperties = {
  ...contentStyle,
  objectFit: "contain",
};
const NavCarousel: React.FC = () => (
  <Carousel autoplay>
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