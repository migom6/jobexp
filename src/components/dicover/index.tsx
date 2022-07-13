import { motion } from "framer-motion";
import useProfiles from "lib/hooks/useProfiles";
import ProfileCard from "./ProfileCard";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const Discover = () => {
  const { profiles } = useProfiles();
  if (!profiles) return null;
  return (
    <motion.section
      variants={variants}
      initial="hidden"
      animate="show"
      className="flex flex-wrap gap-5"
    >
      {profiles.map((profile) => (
        <ProfileCard key={profile.username} {...profile} />
      ))}
    </motion.section>
  );
};
export default Discover;
