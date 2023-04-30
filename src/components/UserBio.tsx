type bioType = {
  bio: string;
};

export default function UserBio({ bio }: bioType) {
  return (
    <p className="font-mono text-sm font-medium text-gray-800 dark:text-gray-300 text-center">
      Bio-{bio === null ? "Not Available" : bio}
    </p>
  );
}
