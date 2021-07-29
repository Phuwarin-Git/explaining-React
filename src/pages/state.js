export const state = () => {
    const date = new Date();
    return (
        <div style={{ margin: 20 }}>
            <h1>State</h1>
            <p>State คือ ข้อมูล หรือ valueต่างๆ ใน component ซึ่งถ้า State มีการเปลี่ยนแปลงจะ
                ทำให้ component นั้นมีการ re-render ใหม่ อัตโนมัติ ตามตัวอย่างเป็นการสร้าง State
                ของเวลาถ้ามีการ refresh เพื่อ get ค่า Date มาใหม่ เวลา ก็จะมีการเปลี่ยนแปลงเนื่องจาก state ถูกเปลี่ยน
            </p>

            <img src={"https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/225592637_4363262717069180_4440056971572757658_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=YMuz-Oo_y8UAX_qCl8i&_nc_ht=scontent.fcnx3-1.fna&oh=20dee4793a0b99ac8e3824d5c5a9cb6f&oe=6106C1C9"} />

            <div>
                <h1>Hello, world!</h1>
                <h2>It is {date.toLocaleTimeString()}.</h2>
            </div>


        </div>
    )
}