import React, {useState, useEffect} from "react";
import axios from 'axios'
import Hero from "../components/Hero";

export default function Home() {

    const [data, setData] = useState("");

    useEffect(() => {
        axios.post("http://localhost:3000/api/cms").then(response => setData(response.data));
    }, [])

    return (
        <div className="container flex items-center mx-auto justify-center">
            <Hero data={data} />
        </div>
    )
}
