const ExperiencesSkeleton = () => {
  const borderCSS = "border-green-500";
  return (
    <section>
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold capitalize">Work Experiences</h2>
      </div>
      <ul className="mt-5 flex flex-col gap-6">
        <ExperienceCardSkeleton />
        <ExperienceCardSkeleton />
      </ul>
    </section>
  );
};

const ExperienceCardSkeleton = () => {
  const borderCSS = "border-green-500";

  return (
    <li className="flex w-full flex-col gap-4 md:flex-row">
      <div className="flex w-full gap-2">
        <div className="flex flex-col justify-between text-center text-sm">
          <span
            style={{
              animationDirection: "revert",
              animationDelay: "0s",
            }}
            className="h-3 w-[66px] animate-pulse rounded bg-slate-200"
          />
          <span
            style={{
              animationDirection: "revert",
              animationDelay: "0.5s",
            }}
            className="h-3 w-[66px] animate-pulse rounded bg-slate-200"
          />
        </div>
        <div
          className={`flex justify-between gap-2 rounded-md border-l-2 ${borderCSS} w-full bg-white p-5 drop-shadow-md md:w-96`}
        >
          <div className="flex flex-col gap-2">
            <div className="flex flex-col text-gray-900 ">
              <span
                style={{
                  animationDirection: "revert",
                  animationDelay: "1s",
                }}
                className="h-2 w-8 animate-pulse rounded bg-slate-200 text-sm text-gray-700"
              />
              <span
                style={{
                  animationDirection: "revert",
                  animationDelay: "1.5s",
                }}
                className="mt-2 h-3 w-36 animate-pulse rounded bg-slate-200"
              />
            </div>
            <div className="flex flex-col text-gray-900 ">
              <span
                style={{
                  animationDirection: "revert",
                  animationDelay: "2s",
                }}
                className="h-2 w-5 animate-pulse rounded bg-slate-200 text-sm text-gray-700"
              />
              <span
                style={{
                  animationDirection: "revert",
                  animationDelay: "2.5s",
                }}
                className="mt-2 h-3 w-40 animate-pulse rounded bg-slate-200"
              />
            </div>
            <div className="flex flex-col text-gray-900 ">
              <span
                style={{
                  animationDirection: "revert",
                  animationDelay: "0s",
                }}
                className="h-2 w-12 animate-pulse rounded bg-slate-200 text-sm text-gray-700"
              />
              <span
                style={{
                  animationDirection: "revert",
                  animationDelay: "0.5s",
                }}
                className="mt-2 h-3 w-32 animate-pulse rounded bg-slate-200"
              />
            </div>
          </div>
          <div
            style={{
              animationDirection: "revert",
              animationDelay: "1s",
            }}
            className="h-14 w-14 flex-shrink-0 animate-pulse overflow-hidden rounded-full bg-slate-200 "
          />
        </div>
      </div>
    </li>
  );
};

export default ExperiencesSkeleton;
