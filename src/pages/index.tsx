import React, {useState, useEffect} from "react";
import axios from 'axios'
import Hero from "../components/Hero";

export default function Home() {
    const [fetched, setFetched] = useState(false)
    const [data, setData] = useState("");

    useEffect(() => {
        axios.post("http://localhost:3000/api/cms")
        .then(response => {setData(response.data), setFetched(true)})
        .catch((error) => {
            console.error(error);
            return Promise.reject(error);
        });
    }, [])

    return (
        <div className="container flex items-center mx-auto justify-center">
            { fetched? <Hero header={data.header} content={data.content} cta={data.cta} src={data.src} /> : <p>loading...</p>}
        </div>
    )
}
