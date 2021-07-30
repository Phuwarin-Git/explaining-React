import { Row, Col } from 'react-bootstrap';
export const styled = () => {
    return (
        <div style={{ margin: 40, minHeight: "1800px", marginBottom: "-10px" }}>
            <h1>Styled component</h1><br />
            <img src={"https://bit.ly/3BRCsER"} alt={"Style"} /><br />
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                โดยปกติแล้วเวลาเราเขียน Style ใน React เราจะต้องเขียนเป็นแบบ CSS ใน JavaScript
                ซึ่งอาจจะทำให้ Code ดูรกหูรกตาไปบ้าง ถ้ายิ่งมีการเขียน Style ที่มากเกินไปดังรูป</p>
            <Row>
                <Col><img src={"https://bit.ly/3fbHTEB"} alt="style" /></Col>
                <Col><img src={"https://bit.ly/3x7tKi4"} alt="style" /></Col>
            </Row><br />
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                หรืออีกวิธีหนึงก็จะเป็นการเขียน CSS แยกและ Import มาใช้แล้วไปเขียน
                ClassName ของ Style ใน แต่ละตัวที่จะใช้เอา แบบนี้
            </p>

            <img src={"https://bit.ly/3rIpqEH"} alt={"Styled"} />
            <br />
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                แต่มีอีกวิธีหนึ่งคือการใช้ Styled-Component แปลได้ตรงๆ เลยคือ Component ที่มี Style เป็น
                Library ที่ทำให้เราเขียน Style ได้ง่ายขึ้น ตัวอย่างคือ ถ้าเราต้องการจะสร้าง Button style
                เราก็สร้าง Component ของ Button เอาไว้ และระบุว่าเป็น Styled Component แล้วก็จัดการ
                ใส่ Style ตามที่เราต้องการได้เลย
            </p>
            <img src={"https://bit.ly/3ld3twf"} alt={"useStyled"} /><br />
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                และเวลานำมาใช้ก็เขียนชื่อ Component แบบนี้ได้เลยโดยไม่ต้องเขียน ClassName ให้ยุ่งยาก
            </p>
            <br /><br /><br />

        </div>
    )
}