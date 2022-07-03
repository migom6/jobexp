const Experiences = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold capitalize">Work Experiences</h2>
      <ul className="mt-5 flex flex-col gap-6">
        <li className="flex gap-2 ">
          <div className="flex flex-col justify-between text-center text-sm">
            <span>22 Oct 21</span>
            <span>23 Oct 22</span>
          </div>
          <div className="flex min-w-[200px] flex-col gap-2 rounded-md border-l-2 border-green-500 bg-white p-5 drop-shadow-md">
            <div className="flex flex-col text-gray-900">
              <span className="text-sm text-gray-700">Company</span>
              <span className="">Acko</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-700">Role</span>
              <span className="">Software Developer 2</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-700">Description</span>
              <span className="max-w-sm">
                I worked on React.js, Redux and other web technologies
              </span>
            </div>
          </div>
        </li>
        <li className="flex gap-2 ">
          <div className="flex flex-col justify-between text-center text-sm">
            <span>22 Oct 21</span>
            <span>23 Oct 22</span>
          </div>
          <div className="flex min-w-[200px] flex-col gap-2 rounded-md border-l-2 border-pink-500 bg-white p-5 drop-shadow-md">
            <div className="flex flex-col text-gray-900">
              <span className="text-sm text-gray-700">Company</span>
              <span className="">Acko</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-700">Role</span>
              <span className="">Software Developer 2</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-700">Description</span>
              <span className="max-w-sm">
                I worked on React.js, Redux and other web technologies
              </span>
            </div>
          </div>
        </li>
        <li className="flex gap-2 ">
          <div className="flex flex-col justify-between text-center text-sm">
            <span>22 Oct 21</span>
            <span>23 Oct 22</span>
          </div>
          <div className="flex min-w-[200px] flex-col gap-2 rounded-md border-l-2 border-purple-500 bg-white p-5 drop-shadow-md">
            <div className="flex flex-col text-gray-900">
              <span className="text-sm text-gray-700">Company</span>
              <span className="">Acko</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-700">Role</span>
              <span className="">Software Developer 2</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-700">Description</span>
              <span className="max-w-sm">
                I worked on React.js, Redux and other web technologies
              </span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Experiences;
