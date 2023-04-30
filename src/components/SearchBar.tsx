import { useUsernameStore } from "@/stores/userStore";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChangeEvent } from "react";

export default function SearchBar() {
  const setUsername = useUsernameStore((state) => state.setUsername);
  const handleChange = (e: ChangeEvent) => {
    setUsername(e.target.innerHTML);
  };

  return (
    <div className=" align-items mx-auto mt-4 flex max-w-md justify-between space-x-2 rounded-lg bg-gray-200 p-2 pb-2 transition duration-300 ease-in dark:bg-[#2b365e] md:max-w-2xl">
      <MagnifyingGlassIcon className="mt-3 ml-2 h-6 w-6 text-[#5176ff] dark:text-blue-600" />
      <input
        name="search"
        onChange={handleChange}
        placeholder="Search GitHub username....."
        className="text-md mt-1 w-[400px] rounded-md bg-gray-200 px-2 py-2 font-mono leading-6 text-slate-500 placeholder-neutral-400 transition  duration-300 ease-in focus:outline-none dark:bg-[#2b365e] dark:text-gray-50 dark:placeholder-slate-500"
      />
    </div>
  );
}
