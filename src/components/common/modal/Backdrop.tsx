import { motion } from "framer-motion";
import { FC, MouseEventHandler, ReactNode } from "react";

const Backdrop: FC<{
  children: ReactNode;
  onClick: MouseEventHandler<HTMLDivElement>;
}> = ({ children, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="fixed inset-0 z-40 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
