import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import User from "@/components/User";
import { useDataStore, useUsernameStore } from "@/stores/userStore";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const username = useUsernameStore((state) => state.username);
  const { data, setData } = useDataStore();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let api = "https://api.github.com/users/octocat";
    if (username) {
      api = `https://api.github.com/users/${username}`;
    }

    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [username]);

  if (!data) <p>No Profile data.</p>;

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#1e1f29]">
      <Head>
        <title>Github User Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SearchBar />
          <User />
        </>
      )}
    </div>
  );
}
