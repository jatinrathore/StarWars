import { Box, Card, CardBody, HStack, Image } from "@chakra-ui/react";
import { PiFilmReel } from "react-icons/pi";
import cardImg from "../../assets/536696.jpg";
import CardMenu from "./CardMenu";
import "./FilmCard.css";

const FilmCard = ({ title }: { title: string }) => {
  return (
    <>
      <div>
        <div>
          <Image src={cardImg} borderRadius="5px" />
        </div>
        <div className="card-footer">
          <div className="card-info">
            <PiFilmReel className="card-icon" />
            {title}
          </div>
          <CardMenu title={title} />
        </div>
      </div>
    </>
  );
};

export default FilmCard;
