const HeroSkeleton = () => {
  return (
    <section className="relative flex w-full  flex-col items-center border-b">
      <div className="h-[300px] w-full" />
      <div className="relative -top-12 flex flex-col items-center">
        <div
          style={{
            animationDirection: "revert",
            animationDelay: "0.5s",
          }}
          className="group relative flex h-[120px] w-[120px] animate-pulse items-center justify-center overflow-hidden rounded-full  bg-slate-200 "
        />

        <h1
          style={{
            animationDirection: "revert",
            animationDelay: "0s",
          }}
          className="mt-5 h-6 w-32 animate-pulse rounded-md bg-slate-200 font-semibold text-transparent"
        />

        <h1
          style={{
            animationDirection: "revert",
            animationDelay: "0.5s",
          }}
          className="mb-5 mt-1 h-5 w-20 animate-pulse rounded-md  bg-slate-200 font-semibold text-transparent"
        />

        <div className="flex gap-5">
          <div
            style={{
              animationDirection: "revert",
              animationDelay: "1s",
            }}
            className="h-10 w-20 animate-pulse rounded-md bg-slate-200"
          />
          <div
            style={{
              animationDirection: "revert",
              animationDelay: "1.5s",
            }}
            className="h-10 w-20 animate-pulse rounded-md bg-slate-200"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSkeleton;
