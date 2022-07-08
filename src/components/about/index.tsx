import Info from "components/common/Info";
import useAbout from "lib/hooks/useAbout";
import { FC } from "react";
import Controls from "./Controls";

const About: FC<{ hasControls?: boolean }> = ({ hasControls = true }) => {
  const { aboutData } = useAbout();

  if (!aboutData) return <div>loading</div>;
  if (!hasControls && !aboutData.about) return <div className="hidden" />;

  return (
    <section className="max-w-2xl">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold capitalize">About me</h2>
        {hasControls && <Controls />}
      </div>
      {aboutData.about ? (
        <p className="mt-2 md:text-lg">{aboutData.about}</p>
      ) : (
        <Info>Please update your about section</Info>
      )}
    </section>
  );
};
export default About;
