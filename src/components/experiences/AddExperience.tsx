import Secondary from "components/common/buttons/Secondary";
import Submit from "components/common/buttons/Submit";
import Input from "components/common/Input";
import TextArea from "components/common/TextArea";
import { Select, Option } from "components/common/Select";

import { Dispatch, FC, SetStateAction, useState } from "react";
import { months, years } from "lib/date";
import CheckBox from "components/common/CheckBox";

const EditAbout: FC<{ setOpen: Dispatch<SetStateAction<boolean>> }> = ({
  setOpen,
}) => {
  const [currentlyWorking, setCurrentlyWorking] = useState(false);

  return (
    <form className="flex min-w-[300px] flex-col gap-5 rounded-md bg-white px-5 py-8 text-neutral-900">
      <h1 className="text-xl font-semibold">Add Experience</h1>
      <Input className="" type="text" placeholder="Company Logo" />
      <Input className="" type="text" placeholder="Company Name" />
      <Input className="" type="text" placeholder="Job Title" />
      <div className="flex flex-col gap-1">
        <label className="text-sm">Start Date</label>
        <div className="flex gap-2">
          <Select>
            {months.map((month) => (
              <Option key={month}>{month}</Option>
            ))}
          </Select>
          <Select>
            {years.map((year) => (
              <Option key={year}>{year}</Option>
            ))}
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-sm">End Date</label>
        <div className="flex gap-2">
          <Select disabled={currentlyWorking}>
            {months.map((month) => (
              <Option key={month}>{month}</Option>
            ))}
          </Select>
          <Select disabled={currentlyWorking}>
            {years.map((year) => (
              <Option key={year}>{year}</Option>
            ))}
          </Select>
        </div>
        <div className="mt-1 flex items-center gap-2">
          <CheckBox
            checked={currentlyWorking}
            onClick={() => setCurrentlyWorking((state) => !state)}
          />
          <label className="text-sm">Currently working</label>
        </div>
      </div>
      <TextArea className="" placeholder="Job Description" />

      <div className="flex gap-5">
        <Submit>Submit</Submit>
        <Secondary
          onClick={() => {
            setOpen(false);
          }}
          type="button"
        >
          Close
        </Secondary>
      </div>
    </form>
  );
};

export default EditAbout;
