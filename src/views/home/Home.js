import React from "react";
import CardsForHome from "../../components/cards/CardsForHome";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import { BsFillBalloonHeartFill } from "react-icons/bs";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="center">
        <div className="txt">Get to know me</div>
        <div>
          <Button
            onClick={() => {
              navigate("/skills");
            }}
          >
            Learn more
            <BsFillBalloonHeartFill />
          </Button>
        </div>
      </div>
      <div>
        <CardsForHome></CardsForHome>
      </div>
    </>
  );
}

export default Home;
