import { BiCameraMovie } from "react-icons/bi";

const Loading = () => {
  return (
    <div className="w-full min-w-50 h-full min-h-70 shadow-lg shrink-0 border-1 loading flex  text-8xl items-center justify-center">
      <BiCameraMovie />
    </div>
  );
};

export default Loading;
