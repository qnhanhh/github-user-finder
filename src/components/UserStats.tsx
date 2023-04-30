import { useDataStore } from "@/stores/userStore";

export default function UserStats() {
  const data = useDataStore((state) => state.data);

  return (
    <div className=" grid grid-cols-3 gap-6  divide-x divide-gray-700 rounded-xl bg-gray-50 py-4 dark:divide-gray-50 dark:bg-[#1e253f]">
      <div className="align-items flex flex-col px-4 text-center">
        <h4 className="font-mono text-xs font-semibold text-gray-700 dark:text-gray-400 ">
          Repos
        </h4>
        <p className="font-mono text-lg font-extrabold text-gray-700 dark:text-gray-50 ">
          {data?.public_repos ? data.public_repos : "Not Available"}
        </p>
      </div>

      <div className="align-items flex flex-col text-center">
        <h4 className="font-mono text-xs font-semibold text-gray-700 dark:text-gray-400 ">
          Followers
        </h4>
        <p className="font-mono text-lg font-extrabold text-gray-700 dark:text-gray-50 ">
          {data?.followers ? data.followers : "Not Available"}
        </p>
      </div>

      <div className="align-items flex flex-col text-center">
        <h4 className="font-mono text-xs font-semibold text-gray-700 dark:text-gray-400 ">
          Following
        </h4>
        <p className="font-mono text-lg font-extrabold text-gray-700 dark:text-gray-50 ">
          {data?.following ? data.following : "Not Available"}
        </p>
      </div>
    </div>
  );
}
