import PrimaryButton from "components/common/buttons/Primary";
import SecondaryButton from "components/common/buttons/Secondary";
import Controls from "./Controls";
import Image from "next/image";
import { FC } from "react";
import useProfileImageUrl from "lib/hooks/useProfileImageUrl";
import usePersonalDetails from "lib/hooks/usePersonalDetails";
import useUser from "lib/hooks/useUser";
import Link from "next/link";
import { useRouter } from "next/router";

const Hero: FC<{ hasControls?: boolean }> = ({ hasControls = true }) => {
  const router = useRouter();
  const {
    query: { username },
  } = router;
  const { profileImageUrl } = useProfileImageUrl();
  const { personalDetailsData } = usePersonalDetails();
  const { user } = useUser();

  if (!profileImageUrl) return <div className="hidden" />;

  return (
    <section className="relative flex w-full flex-col items-center border-b bg-slate-50">
      <div className="h-[300px] w-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200" />
      <div className="relative -top-12 flex flex-col items-center">
        <div className="group relative flex h-[120px] w-[120px] items-center justify-center overflow-hidden rounded-full border-4 border-white bg-red-500 drop-shadow-md">
          <Image
            alt="profile picture"
            src={
              profileImageUrl.profileImageUrl.length > 0
                ? profileImageUrl.profileImageUrl
                : "/vercel.svg"
            }
            height={120}
            width={120}
          />
          {hasControls && <Controls />}
        </div>
        {personalDetailsData?.personalDetails?.name && (
          <h1 className="mt-5 text-2xl font-semibold">
            {personalDetailsData?.personalDetails.name}
          </h1>
        )}
        <h1 className="mb-5 text-xl font-semibold">
          @{username ?? user?.username}
        </h1>
        {hasControls && (
          <div className="flex gap-5">
            <Link href={`/user/${user?.username}`}>
              <a>
                <PrimaryButton>View</PrimaryButton>
              </a>
            </Link>
            <SecondaryButton
              onClick={() => {
                //@TODO: fix late for localhost
                navigator.clipboard.writeText(
                  `${location.protocol}://${location.hostname}/user/${user?.username}`
                );
                alert("Copied to clipboard");
              }}
            >
              Share
            </SecondaryButton>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
