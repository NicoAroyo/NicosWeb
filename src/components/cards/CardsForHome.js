import CardItem from "./CardItem";
import "./Cards.scss";
import meandmomo from "../images-for-cards/meandmomo.jpeg";
import momodev from "../images-for-cards/momodev.jpeg";
function CardsForHome() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={meandmomo}
              label="Me and Momo"
              text="Hi! My name is Nico Aroyo, I'm a 22 year old full-stack software developer. I studied software development at Sela college
              and used varius tool during my studies, mainly C# and JS, this is me and my Corgi Momo, I do freestlye dog dancing with her on my free time.
              I am also a gamer and a general lover of animals."
            ></CardItem>
            <CardItem
              src={momodev}
              label="Momo"
              text="Here is Momo showing off being a fellow software developer."
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsForHome;
