import Submit from "components/common/buttons/Submit";
import Input from "components/common/Input";
const EditPersonal = () => {
  return (
    <form className="flex flex-col gap-5 rounded-md bg-white px-5 py-8">
      <Input className="" type="date" placeholder="Date of Birth" />
      <Input className="" type="email" placeholder="Email" />
      <Input className="" type="text" placeholder="Personal website" />
      <Submit>Submit</Submit>
    </form>
  );
};

export default EditPersonal;
