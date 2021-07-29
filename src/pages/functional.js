export const functional = () => {
    return (
        <div>
            <div style={{ margin: 40 }}>
                <h1>Functional Component</h1>
                <br />
                <img src={"https://bit.ly/376XyAP"} alt="FunctionalComponent" />
                <br />
                <br />
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Functional Component คือ การสร้าง component แบบปัจจุบัน ซึ่งไม่ต้องมีการ extends มาจาก React.component แล้ว </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;การสร้างนั้นจะง่ายและเขียนได้กระชับกว่า เริ่มด้วยการประกาศชื่อ class ตามภาพ const ClassName และตามด้วย {"= ()=>{}"} เพียงเท่านี้เราก็สร้าง Functional Component ได้แล้ว
                    ภายในก็จะสามารถสร้าง state ได้ แต่จะไม่เหมือนกับ Class Component ตรงที่ Functional component นั้น
                    สามารถใช้ hook ในการสร้าง state ได้ จะทำให้เราสามารถ เรียกใช้ state และ setState ได้ง่ายมาก ในส่วน
                    ของการสร้าง function นั้นก็สามารถทำได้เช่นกัน โดยการประกาศ const function name {"=()=>{}"}
                    หรือใช้ function function name {"(){}"} ก็ได้เช่นกัน ส่วนการแสดงผลของหน้าเว็ปไม่ต้องมีการเขียน render
                    ก่อนเหมือนกับ Class component เรามารถ return และเขียน html ผ่าน {"<div/>"} ออกมาได้เลย
                    การ import ไปใช้จะแตกต่างจาก แบบ class Component นิดหน่อยตรงที่ จะต้องมี {"{}"}ครอบ ClassName ไว้ด้วยดังนี้
                </p>

                <h3>import แบบ Class Component</h3>
                <img src={"https://bit.ly/3fajRdb"} alt="FunctionalComponent" />
                <h3>import แบบ Functional Component</h3>
                <img src={"https://bit.ly/2V30lsn"} alt="FunctionalComponent" />

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





