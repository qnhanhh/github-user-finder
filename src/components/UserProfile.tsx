import { useDataStore } from "@/stores/userStore";
import Avatar from "./Avatar";

export default function UserProfile() {
  const data = useDataStore((state) => state.data);
  const date = data?.created_at.toDateString();

  return (
    <div className=" flex w-full items-center space-x-4  md:justify-evenly md:space-x-6">
      <Avatar />
      <div className="flex flex-1 items-center space-x-6 px-2 md:flex-1 md:items-start md:justify-between">
        <h2 className="w-32 md:w-44 font-mono text-lg font-bold text-gray-800 dark:text-gray-50 md:text-2xl">
          {data?.name}{" "}
          <span className="inline-block font-mono text-sm text-blue-400">
            {data?.login && `@${data?.login ? data?.login : "Not Available"}`}
          </span>
        </h2>
        {data?.login && (
          <p className=" md:text-md -mt-2 pl-6 font-mono text-sm font-[400] text-slate-600 dark:text-gray-300 md:mt-0 md:p-6 md:pt-2">
            Joined{" "}
            <span className="flex font-mono text-xs font-semibold md:inline-block md:text-sm">
              {date ? date : "Not Available"}
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
