import CardText from "./CardText";

const Card = ({ item }) => {
  // console.log(item);
  return (
    <div className=" shadow-lg bg-white rounded-b-[5px]">
      <div className="h-[50px] rounded-t-[5px] px-4 flex justify-between items-center bg-slate-800">
        <p className="text-slate-200  text-xs">{item?.title}</p>
        <div style={{ color: item?.iconColor }}>{item?.icon}</div>
      </div>

      {/* content  */}
      <div className=" m-2 pb-5">
        {item?.description?.map((item, idx) => (
          <CardText item={item} key={idx}></CardText>
        ))}
      </div>
    </div>
  );
};

export default Card;
