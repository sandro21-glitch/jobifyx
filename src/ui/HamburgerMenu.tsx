import Hamburger from "hamburger-react";
import { useState, Dispatch, SetStateAction } from "react";

type HamburgerMenuTypes = {
  isOpen?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

const HamburgerMenu = ({
  isOpen: controlledIsOpen,
  setOpen: controlledSetOpen,
}: HamburgerMenuTypes) => {
  const [isInternalOpen, setInternalOpen] = useState<boolean>(false);

  const isOpen = controlledIsOpen ?? isInternalOpen;
  const setOpen = controlledSetOpen ?? setInternalOpen;

  return <Hamburger toggled={isOpen} toggle={setOpen} />;
};

export default HamburgerMenu;
