import React from "react";
import "./BtnsInCart.css";
interface CustomButtonProps {
  label: string;
  onClick: () => void;
}

const BtnsInCart: React.FC<CustomButtonProps> = ({ label, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default BtnsInCart;
