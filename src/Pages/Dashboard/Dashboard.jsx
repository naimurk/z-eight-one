import Card from "../../component/Card";
import RightSidebar from "../../component/RightSidebar";
import Sidebar from "../../component/Sidebar";
import { dashboardsContent } from "../../content/DasboardContent";
import { LuClock2 } from "react-icons/lu";

const Dashboard = () => {
  // console.log(dashboardsContent);
  return (
    <div className="flex w-full ">
      {/* sidebar */}
      <div className="w-[70px] h-screen bg-slate-700">
        <Sidebar></Sidebar>
      </div>
      {/* content */}
      <div className="bg-gray-200 overflow-y-scroll flex w-full h-[100vh]">
        {/* card section */}
        <div className="m-2 w-4/5 h-full">
          <div className="grid grid-cols-3 gap-3">
            {dashboardsContent?.map((item, idx) => (
              <Card key={idx} item={item}></Card>
            ))}
          </div>
        </div>

        {/* right sidebar */}
        <div className="border-2 p-3 sticky bg-slate-700 w-1/5 rounded-[5px]  m-2">
          <div className="flex w-full justify-between items-center">
            <div className="text-slate-200 w-[80%]  border-b-2 border-white">
              <p className="pb-2">Reciente</p>
            </div>
            <div className=" text-slate-200">
               <LuClock2 size={25}></LuClock2>
            </div>
          </div>
          <RightSidebar></RightSidebar>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
