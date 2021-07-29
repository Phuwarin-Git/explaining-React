export const context = () => {
    return (
        <div style={{ margin: 40 }}>
            <h1>Context API</h1>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Context API คือ การจัดการ state เราสามารถส่ง State ไปให้ Component ต่างๆที่ต้องมีการใช้
                State นั้นได้โดยไม่ต้องค่อยๆโยนผ่านไปทีละ Component ตัวอย่างตามภาพ
            </p>

            <img src={"https://bit.ly/3ftDzkz"} alt={"Context"} /><br /><br />
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;จากภาพจะเห็นได้ว่าจะมีการสร้าง Context ที่ชื่อว่า AuthContext และมีการแชร์ State ผ่าน
                AuthContext.Provider ที่จะมี value เป็น State {"=>"} user, setUser, currentUser,
                setCurrent ซึ่ง Component ภายใน AuthContext.Provider นั้นจะสามารถใช้ค่าใน State เหล่านี้
                ได้ทั้งหมดไม่ว่าจะเป็นการ Get ค่าจาก State หรือ setState กลับมา ถ้าจะมองภาพง่ายๆ ให้เรามอง
                Context API เป็นก้อนเมฆที่เราสามารถดึงค่าไปใช้ได้เมื่อไหร่ก็ได้ตามที่ต้องการ และมันยังคง concept ของ
                State คือเมื่อใดที่ค่าใน State มีการเปลี่ยนแปลง Component ที่มีการใช้ State นั้นก็จะมีการ Re-render
                อีกด้วย
            </p>
        </div>
    )
}