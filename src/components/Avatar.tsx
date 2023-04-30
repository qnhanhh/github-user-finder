import { useDataStore } from "@/stores/userStore";
import Image from "next/image";

export default function Avatar() {
  const data = useDataStore((state) => state.data);
  const imageUrl = data?.avatar_url;
  return (
    <div className="w-[120px] h-[120px] ml-8 ring-[5px] ring-[#3b52d4] dark:ring-[#053bff] rounded-full">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt=""
          width="120"
          height="120"
          className="rounded-full object-cover"
        />
      ) : (
        <p className="text-lg font-bold font-mono text-center pt-8 text-gray-800 dark:text-gray-200">
          No Image Found
        </p>
      )}
    </div>
  );
}
