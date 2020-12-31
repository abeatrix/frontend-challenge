import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";

export default function Home({data}) {
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    data ? setFetched(true) : null
  }, []);

  return (
    <div className="container flex items-center mx-auto justify-center">
      {fetched ? (
        <Hero
          header={data.header}
          content={data.content}
          cta={data.cta}
          src={data.src}
        />
      ) : (
        <p>loading...</p>
      )}
    </div>
  );

}

export async function getServerSideProps() {

  const res = await fetch("https://andalwayscc-git-master.beatrix.vercel.app/api/cms")
  const data = await res.json()

  return { props: { data } }
}
