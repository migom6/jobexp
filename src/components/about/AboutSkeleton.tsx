const AboutSkeleton = () => {
  return (
    <section className="max-w-2xl">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold capitalize">About me</h2>
      </div>
      <div className="animate-pulse">
        <div
          style={{
            animationDirection: "revert",
            animationDelay: "0s",
          }}
          className="mt-2 h-2 w-[50%] rounded bg-slate-200"
        />
        <div
          style={{
            animationDirection: "revert",
            animationDelay: "1.5s",
          }}
          className="mt-2 h-2 w-[40%] rounded bg-slate-200"
        />
        <div
          style={{
            animationDirection: "revert",
            animationDelay: "1s",
          }}
          className="mt-2 h-2 w-[90%] rounded bg-slate-200"
        />
        <div
          style={{
            animationDirection: "revert",
            animationDelay: "0.5s",
          }}
          className="mt-2 h-2 w-[80%] rounded bg-slate-200"
        />
      </div>
    </section>
  );
};

export default AboutSkeleton;
