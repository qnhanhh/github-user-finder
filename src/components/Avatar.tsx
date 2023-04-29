import Image from "next/image";

type avatarType = {
  imageUrl: string;
};

export default function Avatar({ imageUrl }: avatarType) {
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
