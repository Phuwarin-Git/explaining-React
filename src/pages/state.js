export const state = () => {
    const date = new Date();
    return (
        <div style={{ margin: 40 }}>
            <h1>State</h1>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;State คือ ข้อมูล หรือ value ต่างๆ ที่จะถูกสร้างมาเพื่อไว้ใช้ใน
                component ตัวเอง ซึ่งถ้า State มีการเปลี่ยนแปลงจะทำให้ component นั้นมีการ Re-render ใหม่ อัตโนมัติ
                ตามตัวอย่างเป็นการสร้าง State ของเวลาถ้ามีการ refresh เพื่อ get ค่า Date มาใหม่ เวลา
                ก็จะมีการเปลี่ยนแปลงเนื่องจาก state ถูกเปลี่ยน </p>

            <img src={"https://bit.ly/379QEuu"} alt="State" /><br />
            <center>
                <h1>Hello, world!</h1>
                <h2>It is {date.toLocaleTimeString()}.</h2><br />
            </center>

            <img src={"https://bit.ly/3x7xwIg"} alt={"setState"} /><br />
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ซึ่งถ้าหากเราต้องการแก้ State ต้องทำใน Component ที่เป็น Class Component ผ่านการ setState
                ตามภาพ
            </p>

        </div>
    )
}