
export const Props = () => {
    return (
        <div style={{ margin: 20 }}>
            <h1>Props</h1>
            <p>Props ย่อมาจาก properties สามารถส่งข้อมูลจาก Component หนึ่งไปยัง Component หนึ่งได้
                จากตัวอย่างเราจะเห็นได้ว่ามีการส่ง Props ที่ชื่อว่า name มี value คือ Phuwarin ไปยัง component TestProps ได้
            </p>
            <img src={"https://bit.ly/3ibiPzK"} alt="Props" />
            <TestProps name="Phuwarin" />
        </div>
    )
}
const TestProps = (props) => {
    return (
        <div>
            <center>
                <h2>------- Getting Props -------</h2>
                <h2>Hello my name is : {props.name}</h2>
            </center>
        </div>
    );
};