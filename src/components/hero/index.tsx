import PrimaryButton from "components/common/buttons/Primary";
import SecondaryButton from "components/common/buttons/Secondary";
import useProfile from "lib/hooks/useProfile";
import Controls from "./Controls";
import Image from "next/image";

const Hero = () => {
  const { profile } = useProfile({});

  if (!profile) return <div className="hidden" />;

  return (
    <section className="relative flex w-full flex-col items-center border-b bg-slate-50">
      <div className="h-[300px] w-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200" />
      <div className="relative -top-12 flex flex-col items-center">
        <div className="group relative flex h-[120px] w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full border-4 border-white bg-red-500 drop-shadow-md">
          <Image
            alt="profile picture"
            src={
              profile.profileImageUrl.length > 0
                ? profile.profileImageUrl
                : "/vercel.svg"
            }
            height={120}
            width={120}
          />
          <Controls />
        </div>
        {profile?.personalDetailsData.personalDetails.name && (
          <h1 className="mt-5 text-2xl font-semibold">
            {profile.personalDetailsData.personalDetails.name}
          </h1>
        )}
        <h1 className="mb-5 text-xl font-semibold">@{profile?.username}</h1>
        <div className="flex gap-5">
          <PrimaryButton>View</PrimaryButton>
          <SecondaryButton>Share</SecondaryButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
