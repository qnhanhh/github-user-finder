import Head from "next/head";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#1e1f29]">
      <Head>
        <title>Github User Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
