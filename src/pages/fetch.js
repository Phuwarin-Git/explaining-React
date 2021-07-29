
import { useState } from "react";

export const Fetch = () => {
    const [data, setData] = useState([]);
    function fetchData() {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
            .then(function (response) {
                console.log("First :", response)
                return response.json();
            })
            .then(function (data) {
                console.log("Sec :", data)
                return setData(data.results)
            });
    }

    return (
        <div style={{ margin: 40 }}>
            <h1>Fetch API</h1>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fetch คือ การดึงข้อมูลจาก API มาใช้ จากภาพจะเป็นตัวอย่างการ Fetch Api มาจาก Pokemon API
                ซึ่งของมูลที่เราได้มานั้นยังไม่สามารถนำไปใช้ได้ เราต้องนำมาแปลงเป็น JSON โดยการเขียน .then
                เพื่อที่จะระบุว่าให้ code ทำอะไรต่อหลังจาก Fetch มาแล้ว จะเห็นได้ว่ามีการนำ response ที่ได้มา
                ไปแปลงเป็น JSON และหลังจากนั้นก็เขียน .then ต่อและเราก็สามารถใช้ข้อมูลใน API นั้นได้แล้ว ในตัวอย่าง
                จะเป็นการดึง Results ของ Pokemon ออกมาซึ่งในนั้นจะมีชื่อและ Url ที่เป็น Details ของ Pokemon ตัวนั้นๆ
                อยู่ สามารถลอง Fetch Pokemon API ได้โดยการกดปุ่ม Fetch API ด้านล่าง
            </p>
            <img src="https://bit.ly/3x6M8HS" alt={"fetch"} />
            <br />
            <center>
                <button onClick={() => fetchData()} style={{ borderRadius: 10 }}>Fetch API</button>

                <br />
                <h3>Pokemon name</h3>
                {data.map((item) => {
                    return <div key={item.url}><p>{item.name}</p></div>
                })}
            </center>
        </div>
    )
}








