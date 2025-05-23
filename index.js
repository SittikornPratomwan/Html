// จำลองข้อมูลบัญชีผู้ใช้
const users = [
  {
    username: "admin",
    password: "123456"  // ❗ ไม่ควรทำแบบนี้จริง ๆ
  },
  {
    username: "user",
    password: "password"
  }
];

function login(event) {
  event.preventDefault(); // ป้องกันการ reload หน้า

  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;

  // ตรวจสอบว่ามีบัญชีที่ตรงหรือไม่
  const matchedUser = users.find(
    user => user.username === usernameInput && user.password === passwordInput
  );

  if (matchedUser) {
    alert("Login successful!");
    // redirect หรือทำอย่างอื่นต่อได้ที่นี่
  } else {
    alert("Invalid username or password.");
  }

  return false;
}
