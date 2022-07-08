const PersonalSkeleton = () => {
  return (
    <div className="flex h-fit w-full flex-col gap-4 rounded-md border border-gray-100 bg-white px-5 py-8 text-slate-900 drop-shadow-sm lg:w-96">
      <div className="flex flex-col">
        <span
          style={{
            animationDirection: "revert",
            animationDelay: "0s",
          }}
          className="mb-2 h-2 w-[30%] animate-pulse rounded bg-slate-200"
        />

        <span
          style={{
            animationDirection: "revert",
            animationDelay: "0.5s",
          }}
          className="h-3 w-[50%] animate-pulse rounded bg-slate-200"
        />
      </div>
      <div className="flex flex-col">
        <span
          style={{
            animationDirection: "revert",
            animationDelay: "1s",
          }}
          className="mb-2 h-3 w-[45%] animate-pulse rounded bg-slate-200"
        />

        <span
          style={{
            animationDirection: "revert",
            animationDelay: "1.5s",
          }}
          className="h-2 w-[70%] animate-pulse rounded bg-slate-200"
        />
      </div>
      <div className="flex flex-col">
        <span
          style={{
            animationDirection: "revert",
            animationDelay: "0s",
          }}
          className="mb-2 h-3 w-[30%] animate-pulse rounded bg-slate-200"
        />

        <span
          style={{
            animationDirection: "revert",
            animationDelay: "0.5s",
          }}
          className="h-2 w-[40%] animate-pulse rounded bg-slate-200"
        />
      </div>
      <div className="flex flex-col">
        <span
          style={{
            animationDirection: "revert",
            animationDelay: "1s",
          }}
          className="mb-2 h-2 w-[40%] animate-pulse rounded bg-slate-200"
        />
        <span
          style={{
            animationDirection: "revert",
            animationDelay: "1.5s",
          }}
          className="h-3 w-[80%] animate-pulse rounded bg-slate-200"
        />
      </div>
    </div>
  );
};

export default PersonalSkeleton;
