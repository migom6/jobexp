const DiscoverSkeleton = () => {
  return (
    <div className="flex flex-wrap gap-5">
      {[1, 2, 3, 4].map((i) => (
        <Card key={i} />
      ))}
    </div>
  );
};

const Card = () => (
  <div className="flex w-full flex-col items-center  justify-center gap-2 rounded-sm bg-white p-5 md:w-60">
    <div
      style={{
        animationDirection: "revert",
        animationDelay: "0.5s",
      }}
      className="h-[60px] w-[60px] animate-pulse overflow-hidden rounded-full bg-slate-200 "
    />

    <h1
      style={{
        animationDirection: "revert",
        animationDelay: "0s",
      }}
      className="h-6 w-32 animate-pulse rounded-md bg-slate-200 font-semibold text-transparent"
    />

    <h1
      style={{
        animationDirection: "revert",
        animationDelay: "0.5s",
      }}
      className="mb-5 mt-1 h-5 w-20 animate-pulse rounded-md  bg-slate-200 font-semibold text-transparent"
    />
  </div>
);

export default DiscoverSkeleton;
