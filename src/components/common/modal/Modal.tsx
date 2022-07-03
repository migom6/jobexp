import { AnimatePresence, useIsomorphicLayoutEffect } from "framer-motion";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useRef,
  useState,
} from "react";

import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { createPortal } from "react-dom";

const Modal: FC<{
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}> = ({ isOpen, setOpen, children }) => {
  return (
    <AnimatePresence
      initial={false}
      // Only render one component at a time.
      // The exiting component will finish its exit
      // animation before entering component is rendered
      exitBeforeEnter={true}
      // Fires when all exiting nodes have completed animating out
      onExitComplete={() => null}
    >
      {isOpen && <ModalBody setOpen={setOpen}>{children}</ModalBody>}
    </AnimatePresence>
  );
};

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 40,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const ModalBody: FC<{
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}> = ({ setOpen, children }) => {
  const [modalDiv, setModalDiv] = useState<Element | null>(null);

  useIsomorphicLayoutEffect(() => {
    setModalDiv(document.getElementById("modal"));
  }, [modalDiv === null]);

  // todo proper error handling
  if (modalDiv === null) return <div>Some error</div>;

  return createPortal(
    <Backdrop onClick={() => setOpen(false)}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="z-50 "
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </Backdrop>,
    modalDiv
  );
};

export default Modal;
