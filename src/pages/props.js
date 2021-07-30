export const Props = () => {

    const list = {
        firstName: "James",
        lastName: "Bond",
        age: 15,
    };

    function Alert() {
        return alert("Change Props");
    }
    return (
        <div style={{ margin: 40, minHeight: "1700px", marginBottom: "-20px" }}>
            <h1>Props</h1>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Props ย่อมาจาก properties โดย Props สามารถส่งข้อมูลจาก Component หนึ่งไปยัง Component หนึ่งได้
                จากตัวอย่างเราจะเห็นได้ว่ามีการส่ง Props ที่ชื่อว่า name มี value เป็น String คือ Phuwarin ไปยัง component TestProps และ ในส่วน Component
                TestProps ก็จะมีการรับ Props มา และนำไปใช้โดยการเรียก Props. ชื่อ props ที่ส่งมา{" (ในที่นี้เป็น name ก็จะเขียนได้ว่า props.name นะครับ)"}
            </p>
            <img src={"https://bit.ly/3ibiPzK"} alt="Props" /><br />
            <center>
                <h3>Result จะได้ดังนี้</h3>
                <h2>------- Getting Props -------</h2>
                <h2>Hello my name is : Phuwarin</h2>
            </center>

            <br />
            <img src={"https://bit.ly/3C6nACC"} alt={"props"} /><br />
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                นอกจากนี้ Props ยังสามารถส่งสิ่งอื่นที่ไม่ใช่ String อีกด้วยเช่น Object ทั้งก้อน หรือ Function ได้อีกด้วย</p>
            <center>
                <h3>Result จะได้ดังนี้</h3><br />
            </center>
            <TestProps name={"Phuwarin"} list={list} Alert={Alert} />
        </div>
    )
}
const TestProps = (props) => {
    return (
        <div>
            <center>
                <h2>------- Getting Props -------</h2>
                <h2>Hello my name is : {props.name}</h2>
                <h2>First name : {props.list.firstName}</h2>
                <h2>First name : {props.list.lastName}</h2>
                <h2>First name : {props.list.age}</h2><br />
                <button onClick={() => props.Alert()}>Alert</button>
                <br />
                <br />
            </center>
        </div>
    );
};