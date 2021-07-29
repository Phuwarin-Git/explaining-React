export const functional = () => {
    return (
        <div>
            <div style={{ margin: 20 }}>
                <h1>Functional Component</h1>
                <br />
                <img src={"https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/187785005_4363084180420367_5582982146965710181_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=JEsKOj4woncAX8OZdg0&tn=oyhgz3zo1Wwi9hXg&_nc_ht=scontent.fcnx3-1.fna&oh=f8868ddd4f5470d56b74bb63d3931dec&oe=61080A25"} />
                <br />
                <br />
                <p>Functional Component คือ การสร้าง component แบบปัจจุบัน ซึ่งไม่ต้องมีการ extends มาจาก React.component แล้ว </p>
                <p>การสร้างนั้นจะง่ายและเขียนได้กระชับกว่า เริ่มด้วยการประกาศชื่อ class ตามภาพ const ClassName และตามด้วย {"= ()=>{}"} เพียงเท่านี้เราก็สร้าง Functional Component ได้แล้ว
                    ภายในก็จะสามารถสร้าง state ได้ แต่จะไม่เหมือนกับ Class Component ตรงที่ Functional component นั้น
                    สามารถใช้ hook ในการสร้าง state ได้ จะทำให้เราสามารถ เรียกใช้ state และ setState ได้ง่ายมาก ในส่วน
                    ของการสร้าง function นั้นก็สามารถทำได้เช่นกัน โดยการประกาศ const function name {"=()=>{}"}
                    หรือใช้ function function name {"(){}"} ก็ได้เช่นกัน ส่วนการแสดงผลของหน้าเว็ปไม่ต้องมีการเขียน render
                    ก่อนเหมือนกับ Class component เรามารถ return และเขียน html ผ่าน {"<div/>"} ออกมาได้เลย
                    การ import ไปใช้จะแตกต่างจาก แบบ class Component นิดหน่อยตรงที่ จะต้องมี {"{}"}ครอบ ClassName ไว้ด้วยดังนี้
                </p>

                <h3>import แบบ Class Component</h3>
                <img src={"https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/218239836_4363043657091086_1879748527072502764_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=GzINBzIm9sMAX8oN96B&_nc_ht=scontent.fcnx3-1.fna&oh=1dd7fb072ba910524da3d347909d1d10&oe=61073F98"} />
                <h3>import แบบ Functional Component</h3>
                <img src={"https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/217616728_4363043053757813_7605800418420835344_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=4qZZKwi32EUAX-jyUtZ&_nc_ht=scontent.fcnx3-1.fna&oh=460055cf73a7a53cf8a99636c5657453&oe=6106E375"} />


            </div>

        </div>
    )
}



// import React, { useState } from "react";

// const functional = () => {
//     const [count, setCount] = useState(0);

//     const increase = () => {
//         setCount(count + 1);
//     }

//     return (
//         <div style={{ margin: '50px' }}>
//             <h1>Welcome to Functional Component </h1>
//             <h3>Counter App using Functional Component : </h3>
//             <h2>{count}</h2>
//             <button onClick={increase}>Add</button>
//         </div>
//     )
// }


// export default functional;





