import { Link } from "react-router-dom";

const UserDetails = () => {
  return (
    <div className="max-w-[300px] mt-12 p-4 flex flex-col justify-center bg-white items-center h-auto mx-auto border-b-[4px] border-l-[1px] border-r-[1px] rounded-md shadow-xl border-slate-300">
      <h1 className="text-3xl mb-6">Po Ping</h1>
      <p className="mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nam
        autem aliquam cupiditate accusantium odit eos facilis. Laboriosam
        dignissimos placeat debitis dolores, ut sequi totam cumque est voluptate
        porro fugiat impedit laudantium hic! Ipsa, atque?
      </p>
      <p className="text-slate-500">
        Specialty: <span className="font-bold">Ninja</span>
      </p>
      <Link
        to="/"
        className="border-[1px] border-slate-800 rounded-md bg-slate-300 hover:bg-slate-200 active:bg-slate-100 px-2 mt-4"
      >
        Back
      </Link>
    </div>
  );
};

export default UserDetails;
