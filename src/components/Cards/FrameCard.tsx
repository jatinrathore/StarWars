import { Box, Image } from "@chakra-ui/react";
import cardImg from "../../assets/536696.jpg";
import CardMenu from "./CardMenu";
import "./Card.css";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  cardImg: string;
}
const FrameCard = ({ title, children, cardImg }: Props) => {
  return (
    <>
      <Box
        _hover={{ transform: "scale(1.03)" }}
        transition={"transform .15s ease-in"}
      >
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
      </Box>
    </>
  );
};

export default FrameCard;
