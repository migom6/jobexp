import { Profile } from "lib/types";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const ProfileCard: FC<Partial<Profile>> = ({
  aboutData,
  profileImageUrl,
  username,
}) => {
  return (
    <Link href={`/user/${username}`}>
      <motion.a
        variants={variants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.05 }}
        className="flex w-full flex-col items-center justify-center gap-2 rounded-sm bg-white p-5 drop-shadow  md:w-60"
      >
        <Image
          className="h-[60px] w-[60px] overflow-hidden rounded-full"
          alt="profile picture"
          src={
            profileImageUrl?.length ?? 0 > 0
              ? profileImageUrl ?? "/images/avatar.svg"
              : "/images/avatar.svg"
          }
          height={60}
          width={60}
        />
        <div>{username}</div>
        {aboutData?.isPublic && <div>{aboutData.about}</div>}
      </motion.a>
    </Link>
  );
};

export default ProfileCard;
