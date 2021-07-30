
export const classCom = () => {
    return (
        <div style={{ margin: 40 }}>
            <h1>Class Component</h1>
            <br />
            <img src={"https://bit.ly/3BS65pp"} alt="ClassComponent" />
            <br />
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Class component คือ การสร้าง component แบบเก่าซึ่งจะต้องมีการ extends มาจาก React.component </p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;การสร้างต้องเริ่มด้วย class ตามด้วย ClassName และ extends React.Component ภายในเราจะสามารถสร้าง
                state เพื่อเก็บ value ต่างๆได้ ซึ่งการสร้าง state ใน Class component นั้น จะต้อง สร้าง constructor()
                ไว้เก็บค่าต่างๆ ซึ่งการสร้างแบบ class component นั้นจะเป็นการเขียน code ที่ยาวกว่าต่างจาก functional
                component ที่ถูกสร้างมาให้เขียนได้สั้นกว่าโดยการใช้ Hook และการสร้าง function ก็จะสร้างโดยประกาศชื่อ
                function และตามด้วย () การ render หรือ ส่วนการแสดงผลของหน้าเว็ป จะต้องมีการ render() ก่อน แล้วค่อย
                return() ออกมา ส่วนการจะ import ไปใช้ใน component อื่นจะต้อง import แบบ import ClassName from "...."
                ต่างจาก functional component ที่จะเป็น import  {"{ClassName}"} from "..."
            </p>
            <h3>import แบบ Class Component</h3>
            <img src={"https://bit.ly/3fajRdb"} alt="ClassComponent" />
            <h3>import แบบ Functional Component</h3>
            <img src={"https://bit.ly/2V30lsn"} alt="ClassComponent" />
            <br /><br />
            <br />
            <br />
        </div>


    )
}

// import React from "react";

// class context extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0
//         };
//         this.increase = this.increase.bind(this);
//     }

//     increase() {
//         this.setState({ count: this.state.count + 1 });
//     }

//     render() {
//         return (
//             <div style={{ margin: '50px' }}>
//                 <h1>Welcome to Class Component </h1>
//                 <h3>Counter App using Class Component : </h3>
//                 <h2> {this.state.count}</h2>
//                 <button onClick={this.increase}> Add</button>

//             </div>
//         )
//     }
// }

// export default context;