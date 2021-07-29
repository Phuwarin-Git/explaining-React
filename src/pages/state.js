export const state = () => {
    const date = new Date();
    return (
        <div style={{ margin: 40 }}>
            <h1>State</h1>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;State คือ ข้อมูล หรือ valueต่างๆ ใน component ซึ่งถ้า State มีการเปลี่ยนแปลงจะ
                ทำให้ component นั้นมีการ Re-render ใหม่ อัตโนมัติ ตามตัวอย่างเป็นการสร้าง State
                ของเวลาถ้ามีการ refresh เพื่อ get ค่า Date มาใหม่ เวลา ก็จะมีการเปลี่ยนแปลงเนื่องจาก state ถูกเปลี่ยน
            </p>

            <img src={"https://bit.ly/379QEuu"} alt="State" />

            <div>
                <center>
                    <h1>Hello, world!</h1>
                    <h2>It is {date.toLocaleTimeString()}.</h2>
                </center>
            </div>


        </div>
    )
}