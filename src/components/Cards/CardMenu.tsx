import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { GrView } from "react-icons/gr";
import { LuDownload } from "react-icons/lu";
import { PiPencilSimple } from "react-icons/pi";
import { LuShare2 } from "react-icons/lu";
import { PiFolders } from "react-icons/pi";
import { RxLockClosed } from "react-icons/rx";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import CardMenuItem from "./CardMenuItem";
import DeleteModal from "./DeleteModal";

const CardMenu = ({ title }: { title: string }) => {
  return (
    <Menu>
      <MenuButton as={Button} background="#F9FAFD33">
        <BsThreeDotsVertical />
      </MenuButton>
      <MenuList bg="white">
        <MenuItem bg="white" color="black" _hover={{ bg: "#F1F1F5" }}>
          <CardMenuItem title="View" children={<GrView />} />
        </MenuItem>
        <MenuItem bg="white" color="black" _hover={{ bg: "#F1F1F5" }}>
          <CardMenuItem title="Download" children={<LuDownload />} />
        </MenuItem>
        <MenuItem bg="white" color="black" _hover={{ bg: "#F1F1F5" }}>
          <CardMenuItem title="Rename" children={<PiPencilSimple />} />
        </MenuItem>
        <MenuItem bg="white" color="black" _hover={{ bg: "#F1F1F5" }}>
          <CardMenuItem title="Share Link" children={<LuShare2 />} />
        </MenuItem>
        <MenuItem bg="white" color="black" _hover={{ bg: "#F1F1F5" }}>
          <CardMenuItem title="Move" children={<PiFolders />} />
        </MenuItem>
        <MenuItem bg="white" color="black" _hover={{ bg: "#F1F1F5" }}>
          <CardMenuItem title="Make Private" children={<RxLockClosed />} />
        </MenuItem>
        <MenuItem bg="white" color="red" _hover={{ bg: "#F1F1F5" }}>
          <DeleteModal title={title} />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CardMenu;
