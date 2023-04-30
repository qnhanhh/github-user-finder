import UserBio from "./UserBio";
import UserData from "./UserData";
import UserProfile from "./UserProfile";
import UserStats from "./UserStats";

export default function User() {
  return (
    <div className="mx-auto mt-6 flex max-w-md min-h-[470px] flex-col items-end justify-between  space-y-4 rounded-lg bg-gray-200 py-6 transition duration-300 ease-in dark:bg-[#2b365e] md:min-h-fit md:max-w-2xl">
      <UserProfile />

      <div className=" flex w-full md:max-w-lg flex-col space-y-6 px-6 py-3">
        <UserBio />
        <UserStats />
        <UserData />
      </div>
    </div>
  );
}
