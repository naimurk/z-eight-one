import { VscTools } from "react-icons/vsc";
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center gap-y-3 w-full  text-slate-200">
      <div className="bg-slate-800 w-full flex justify-center py-2">
        <IoHomeSharp className="" size={25}></IoHomeSharp>
      </div>
      <MdOutlineSettings size={25}></MdOutlineSettings>
    </div>
  );
};

export default Sidebar;
