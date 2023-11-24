import { Image } from "@chakra-ui/react";
import cardImg from "../../assets/536696.jpg";
import CardMenu from "./CardMenu";
import "./Card.css";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}
const FilmCard = ({ title, children }: Props) => {
  return (
    <>
      <div>
        <div>
          <Image src={cardImg} borderRadius="5px" />
        </div>
        <div className="card--footer">
          <div className="card--info">
            {children}
            {title}
          </div>
          <CardMenu title={title} />
        </div>
      </div>
    </>
  );
};

export default FilmCard;
