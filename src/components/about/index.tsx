import { FC } from "react";
import Controls from "./Controls";

const About: FC<{ hasControls?: boolean }> = ({ hasControls = true }) => {
  return (
    <section>
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold capitalize">About me</h2>
        {hasControls && <Controls />}
      </div>
      <p className="mt-2 md:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laborum
        error, aliquam, culpa veniam dolorum placeat ab eum eos qui dolores
        doloremque recusandae velit eveniet laudantium. Iusto fuga tempora
        maxime.
      </p>
    </section>
  );
};
export default About;
