export const hook = () => {
    return (
        <div style={{ margin: 20 }}>
            <h1>Hook</h1>
            <img src={"https://bit.ly/2V30PyH"} alt="Hook" />
            <p>Hook ถูกสร้างออกมาเพื่อการจัดการกับ State ปกติถ้าเราสร้าง Function Component และโยน props เข้าไปมันจะ render ออกมาได้อย่างเดียว
                แต่ไม่สามารถ setState ต่างๆ ได้ ถ้าเราอยาก setState เราต้องเปลี่ยนจาก Function Component ให้เป็น Class Component เพื่อให้สามารถ
                setState ต่างๆ ได้ ซึ่งการทำแบบนั้นทำให้เสียเวลามาก ดังนั้น hook จึงออกมาเพื่อแก้ปัญหานั้น จากภาพ Hook นั้นจะถูกสร้าง
                ในรูปแบบของ array ตัวแรกจะเป็นชื่อของ state ชื่อตัวหลังจะเป็นชื่อ function ที่ใช้ในการ setState</p>
            <h2>การสร้าง Hook</h2>

            <p>1. import React, {"{ useState }"} from 'react'</p>
            <p>2. สร้างด้วย Fucntional Component และ ชื่อ class ต้องเป็นตัวพิมพ์ใหญ่ เท่านั้น</p>
            <p>3. ต้องเรียก Hook ที่ส่วน Top Level ของ function เท่านั้น</p>

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





