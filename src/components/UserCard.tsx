import { Link } from "react-router-dom";
import profilePic from "../assets/kfpanda-150px.jpg";

function UserCard() {
  return (
    <div className="card max-w-[300px] h-auto flex flex-col justify-center items-center mx-auto rounded-md shadow-xl bg-white p-4 mt-12">
      <img src={profilePic} alt="photo" className="rounded-full mb-4" />
      <h2 className="font-semibold text-lg text-slate-700 mb-4">Po Ping</h2>
      <p className="text-slate-600 p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magni
        doloremque.
      </p>
      <Link
        to="userdetails"
        className="bg-slate-300 hover:bg-slate-200 active:bg-slate-100 border-[1px] border-slate-800 px-2 rounded-lg mt-2"
      >
        More Info
      </Link>
    </div>
  );
}
export default UserCard;
