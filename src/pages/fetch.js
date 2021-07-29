import { useState } from "react";

export const Fetch = () => {
    const [data, setData] = useState([]);
    function fetchData() {
        const a = fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setData(data.results)
                console.log(data.results)
                return data.results;
            });
        return a;
    }
    return (
        <div style={{ margin: 20 }}>
            <h1>Fetch</h1>
            <p>Fetch คือ การดึงข้อมูลจาก API มาใช้</p>
            <button onClick={() => fetchData} >Fetch</button>
            {data.map((item) => {
                return <p>{item}</p>
            })}
        </div>
    )
}