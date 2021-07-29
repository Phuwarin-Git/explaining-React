
export const Props = () => {
    return (
        <div style={{ margin: 20 }}>
            <h1>Props</h1>
            <p>Props ย่อมาจาก properties สามารถส่งข้อมูลจาก Component หนึ่งไปยัง Component หนึ่งได้
                จากตัวอย่างเราจะเห็นได้ว่ามีการส่ง Props ที่ชื่อว่า name มี value คือ Phuwarin ไปยัง component TestProps ได้
            </p>
            <img src={"https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/225663573_4363306030398182_650782646922158946_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=730e14&_nc_ohc=F2JW0xsG_8sAX_Xh9A8&_nc_ht=scontent.fcnx3-1.fna&oh=19412d0127cff4cba0d7ee35b1d5d013&oe=6107114E"} />
            <TestProps name="Phuwarin" />
        </div>
    )
}
const TestProps = (props) => {
    function ChangeWord() {
        return props.setList("Change from Child setState");
    }
    return (
        <div>
            <center>
                <h2>------- Getting Props -------</h2>
                <h2>Hello my name is : {props.name}</h2>
            </center>
        </div>
    );
};