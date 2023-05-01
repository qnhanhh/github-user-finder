import { useDataStore } from "@/stores/userStore";

export default function UserBio() {
  const data = useDataStore((state) => state.data);
  return (
    <p className="font-mono text-sm font-medium text-gray-800 dark:text-gray-300 text-center">
      {data?.bio ? data.bio : "No Bio Available"}
    </p>
  );
}
