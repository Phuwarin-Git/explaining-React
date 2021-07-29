export const hook = () => {
    return (
        <div style={{ margin: 40 }}>
            <h1>Hook</h1>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hook ถูกสร้างออกมาเพื่อการจัดการกับ State ปกติถ้าเราสร้าง Function Component และโยน props เข้าไปมันจะ render ออกมาได้อย่างเดียว
                แต่ไม่สามารถ setState ต่างๆ ได้ ถ้าเราอยาก setState เราต้องเปลี่ยนจาก Function Component ให้เป็น Class Component เพื่อให้สามารถ
                setState ต่างๆ ได้ ซึ่งการทำแบบนั้นทำให้เสียเวลามาก ดังนั้น hook จึงออกมาเพื่อแก้ปัญหานั้น จากภาพ Hook นั้นจะถูกสร้าง
                ในรูปแบบของ array ตัวแรกจะเป็นชื่อของ state ชื่อตัวหลังจะเป็นชื่อ function ที่ใช้ในการ setState</p>
            <h2>การสร้าง Hook</h2>

            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. import React, {"{ useState }"} from 'react'</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. สร้างด้วย Fucntional Component และ ชื่อ class ต้องเป็นตัวพิมพ์ใหญ่ เท่านั้น</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. ต้องเรียก Hook ที่ส่วน Top Level ของ function เท่านั้น</p>



            <img src={"https://bit.ly/2V30PyH"} alt="Hook" /><br /><br />
            <p>ในตัวอย่างนี้เป็นการใช้ useState คือการระบุว่าจะจะมีการสร้าง State ที่นี่ และสามารถ setState แก้ไขข้อมูลใน
                State ได้อีกด้วย
            </p>

            <br />
            <img src={"https://bit.ly/3iZw3Pf"} alt={"useEffect"} /><br /><br />
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ซึ่งนอกจาก useState แล้วยังมี useEffect อีกด้วย ซึ่ง useEffect คือจะใช้ตรวจการเปลี่ยนแปลงของ State
                เมื่อ State นั้นมีการเปลี่ยนแปลงเมื่อไหร่คำสั่งที่เราเขียนไว้ก็จะทำงานทันทีจะยกตัวอย่างตามภาพด้านล่างเมื่อ State user
                มีการเปลี่ยนแปลง คำสั่งที่อยู่ใน useEffect ก็จะทำงานว่าให้นำค่า User ที่ได้มาไปเก็บไว้ใน localStorage
            </p>
        </div>
    )
}


// import React, { useState } from 'react'
// export const Hook = () => {
//     const [count, setCount] = useState(0)

//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//         </div>
//     );

// }





