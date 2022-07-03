import PrimaryButton from "components/common/buttons/Primary";
import SecondaryButton from "components/common/buttons/Secondary";
const Hero = () => {
  return (
    <header className="relative flex flex-col items-center border-b bg-slate-50">
      <div className="h-[200px] w-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200" />
      <div className="relative -top-12 flex flex-col items-center">
        <div className="h-[120px] w-[120px] overflow-hidden rounded-full border-4 border-white bg-red-500 drop-shadow-md" />

        <h1 className="mt-5 text-2xl font-semibold">Abhilash Sharma</h1>
        <h1 className="mb-5 text-xl font-semibold">@migom6</h1>
        <div className="flex gap-5">
          <PrimaryButton>View</PrimaryButton>
          <SecondaryButton>Share</SecondaryButton>
        </div>
      </div>
    </header>
  );
};

export default Hero;
