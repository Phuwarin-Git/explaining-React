import { Row, Col } from 'react-bootstrap';
import IMG from "../component/picture.view"
export const custom = () => {
    return (
        <div style={{ margin: 20 }}>
            <h1>Custom Hook</h1>
            <p>Custom Hook คือ การสร้าง Function ที่สามารถ reuse logic เดิมซ้ำได้ในกรณีที่อาจจะมีการใช้ logic แบบเดียวกัน
                หลายๆ ครั้ง เช่น การใช้ Hook ในการ fetch api 2 ตัว เราไม่จำเป็นต้องสร้าง hook และ function สำหรับ fetch 2 รอบ
                ตามภาพ
            </p>
            <h3>การสร้าง Custom Hook นั้นมีกฎเหมือนการสร้าง Hook</h3>
            <p>1. สร้างด้วย Fucntional Component และ ชื่อ class ต้องเป็นตัวพิมพ์ใหญ่ เท่านั้น</p>
            <p>2. ต้องเรียก Hook ที่ส่วน Top Level ของ function เท่านั้น</p>
            <p>3. เป็นข้อที่แตกต่างคือ ต้องตั้งชื่อขึ้นมาเอง และต้องขึ้นต้นด้วยคำว่า use (ตามตัวอย่างจะเป็น useFetch)</p>
            <img src={"https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/205567565_4363187380410047_8708429292210497018_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=BtaO9lg1-goAX-iXQJj&_nc_ht=scontent.fcnx3-1.fna&oh=9e9a333fd71d223a4dbde504f8b3d0bc&oe=61081493"} />
            <br /><br />
            <h3>Component ที่เรียกใช้</h3>
            <br />
            <Row>
                <Col><IMG src={"https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/218003477_4363197147075737_384397754252889302_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=s8mhdPMKY3cAX9-V5x3&_nc_ht=scontent.fcnx3-1.fna&oh=f20781a9911553663465c456433afc90&oe=6106AC79"} /></Col>
                <Col><IMG src={"https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/201885099_4363197350409050_8921893167970428154_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=Cz4xrjgX1UEAX8dnAvG&_nc_ht=scontent.fcnx3-1.fna&oh=6fafefd20653b75aead0c5a74a965106&oe=6107CCDB"} /></Col>
            </Row>
            <br />


        </div>
    )
}