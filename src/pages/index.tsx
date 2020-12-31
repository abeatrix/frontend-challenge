import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";

export default function Home({ data }) {
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    data ? setFetched(true) : null;
  }, []);

  return (
    <div className="flex-col w-full h-screen">
      <Header/>
      {fetched ? (
        <div className="flex w-full items-center justify-center bg-black">
          <Hero
            header={data.header}
            content={data.content}
            cta={data.cta}
            src={data.src}
          />
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const url = "https://andalwayscc-git-master.beatrix.vercel.app/";
  const res = await fetch(url + "/api/cms");
  const data = await res.json();

  return { props: { data } };
}
