import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import User from "@/components/User";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  let api = "https://api.github.com/users/octocat";

  const userRef = useRef(null);
  const [userName, setUserName] = useState("");
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    setUserName(userRef.current.value);
  };

  useEffect(() => {
    setLoading(true);
    if (userName) {
      api = `https://api.github.com/users/${userName}`;
    }

    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [userName]);

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
          <SearchBar
            userName={userName}
            handleClick={handleClick}
            userRef={userRef}
          />
          <User data={data} />
        </>
      )}
    </div>
  );
}
