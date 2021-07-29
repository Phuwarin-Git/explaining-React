import { Row, Col } from 'react-bootstrap';
import IMG from "../component/picture.view"
export const custom = () => {
    return (
        <div style={{ margin: 40 }}>
            <h1>Custom Hook</h1>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Custom Hook คือ การสร้าง Function ที่สามารถ reuse logic เดิมซ้ำได้ในกรณีที่อาจจะมีการใช้ logic แบบเดียวกัน
                หลายๆ ครั้ง เช่น การใช้ Hook ในการ fetch api 2 ตัว เราไม่จำเป็นต้องสร้าง hook และ function สำหรับ fetch 2 รอบ
                ตามภาพ
            </p>
            <h3>การสร้าง Custom Hook นั้นมีกฎเหมือนการสร้าง Hook</h3>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. สร้างด้วย Fucntional Component และ ชื่อ class ต้องเป็นตัวพิมพ์ใหญ่ เท่านั้น</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. ต้องเรียก Hook ที่ส่วน Top Level ของ function เท่านั้น</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. เป็นข้อที่แตกต่างคือ ต้องตั้งชื่อขึ้นมาเอง และต้องขึ้นต้นด้วยคำว่า use (ตามตัวอย่างจะเป็น useFetch)</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. ตอนเรียกใช้จะเป็น const {"variable = CustomhookName(parameter)"} จะต้องมีการส่ง parameter ไปด้วย ตามตัวอย่างจะเป็น url ของ API ที่ต้องการ fetch</p>
            <img src={"https://bit.ly/3f8FNW1"} alt="CustomHook" />
            <br /><br />
            <h3>Component ที่เรียกใช้</h3>
            <br />
            <Row>
                <Col><IMG src={"https://bit.ly/2TG996K"} alt="CustomHook" /></Col>
                <Col><IMG src={"https://bit.ly/377UlBa"} alt="CustomHook" /></Col>
            </Row>
            <br />


        </div>
    )
}