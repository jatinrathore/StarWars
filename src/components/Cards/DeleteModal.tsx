import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
  Box,
  Heading,
} from "@chakra-ui/react";
import { GrCircleAlert } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";

const DeleteModal = ({ title }: { title: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box onClick={onOpen} color="red" display="flex" alignItems="center">
        <RiDeleteBinLine />
        <Text marginLeft="8px">Delete</Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="white" color="black">
          <ModalHeader>
            <GrCircleAlert color="red" fontSize={25} />
          </ModalHeader>
          <ModalBody>
            <Heading fontSize={20}>Caution!</Heading>
            <Text mt={4}>
              Are you sure you want to delete <b>"{title}"</b>
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              border="2px solid #DEDEDE"
              onClick={onClose}
              color="black"
              flex={1}
              mr={3}
            >
              Cancel
            </Button>
            <Button bg="#FC5A5A" flex={1} _hover={{ bg: "#FC5A5A" }}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteModal;
