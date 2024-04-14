import { BsDot } from "react-icons/bs";

const CardText = ({ item }) => {
  return (
    <div className="text-xs border-b-2 border-slate-200">
      <div className=" flex mb-3 items-center">
        <BsDot size={20} className="text-slate-500" ></BsDot>
        <p className="text-slate-500">{item}</p>
      </div>
    </div>
  );
};

export default CardText;
