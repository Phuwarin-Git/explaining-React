
export const classCom = () => {
    return (
        <div style={{ margin: 20 }}>
            <h1>Class Component</h1>
            <br />
            <img src={"https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/225732701_4363009697094482_3657101982403503912_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=fnXmMaTLS0gAX95IpWn&_nc_ht=scontent.fcnx3-1.fna&oh=4ba8e5496b9e42ec7fab5594d18a12fb&oe=6106C581"} />
            <br />
            <br />
            <p>Class component คือ การสร้าง component แบบเก่าซึ่งจะต้องมีการ extends มาจาก React.component </p>
            <p>การสร้างต้องเริ่มด้วย class ตามด้วย ClassName และ extends React.Component ภายในเราจะสามารถสร้าง
                state เพื่อเก็บ value ต่างๆได้ ซึ่งการสร้าง state ใน Class component นั้น จะต้อง สร้าง constructor()
                ไว้เก็บค่าต่างๆ ซึ่งการสร้างแบบ class component นั้นจะเป็นการเขียน code ที่ยาวกว่าต่างจาก functional
                component ที่ถูกสร้างมาให้เขียนได้สั้นกว่าโดยการใช้ Hook และการสร้าง function ก็จะสร้างโดยประกาศชื่อ
                function และตามด้วย () การ render หรือ ส่วนการแสดงผลของหน้าเว็ป จะต้องมีการ render() ก่อน แล้วค่อย
                return() ออกมา ส่วนการจะ import ไปใช้ใน component อื่นจะต้อง import แบบ import ClassName from "...."
                ต่างจาก functional component ที่จะเป็น import  {"{ClassName}"} from "..."
            </p>
            <h3>import แบบ Class Component</h3>
            <img src={"https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/218239836_4363043657091086_1879748527072502764_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=GzINBzIm9sMAX8oN96B&_nc_ht=scontent.fcnx3-1.fna&oh=1dd7fb072ba910524da3d347909d1d10&oe=61073F98"} />
            <h3>import แบบ Functional Component</h3>
            <img src={"https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/217616728_4363043053757813_7605800418420835344_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=4qZZKwi32EUAX-jyUtZ&_nc_ht=scontent.fcnx3-1.fna&oh=460055cf73a7a53cf8a99636c5657453&oe=6106E375"} />


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