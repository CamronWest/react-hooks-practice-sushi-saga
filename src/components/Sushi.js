import React from "react";

function Sushi({ sushi, onEatSushi }) {
  const { name, img_url, price, eaten } = sushi;

  const handleClick = () =>{
    !!eaten ? alert("Your plate is empty, unfortunately") : onEatSushi(sushi);
  }
 
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {eaten ? null : <img src={img_url} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
