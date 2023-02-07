import React  from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, onEatSushi}) {
  const [sushiIndex, setSushiIndex] = React.useState(0);

  const sushiComponents = sushis.slice(sushiIndex, sushiIndex + 4).map((sushi) => (
    <Sushi key = {sushi.id} sushi={sushi} oneatSushi={onEatSushi} />
  ));

  const handleClick = () => {
    setSushiIndex((sushiIndex) => (sushiIndex +4) % sushis.length);
  }

  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton onClickMore={handleClick}/>
    </div>
  );
}

export default SushiContainer;
