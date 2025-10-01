// ============================
// DEMO JAVASCRIPT ES6+
// ============================

export function runDemo() {
    console.clear();
    console.log("BẮT ĐẦU DEMO ES6+");
  
    // 1️ let / const + arrow function
    let internName = "Phú";
    const company = "ABC Tech";
  
    const greet = (name) => console.log(`Xin chào ${name} đến với ${company}!`);
    greet(internName);
  
    // 2️ Destructuring + Template Literals
    const student = { name: "Lan", age: 22, scores: [8, 9, 10] };
    const { name, age, scores } = student;
    const [math, english, it] = scores;
    console.log(`${name} (${age} tuổi) → Toán: ${math}, Anh: ${english}, Tin: ${it}`);
  
    // 3️ Spread & Rest
    const oldScores = [7, 8, 9];
    const newScores = [...oldScores, 10];
    console.log("Spread:", newScores);
  
    const total = (...nums) => nums.reduce((a, b) => a + b, 0);
    console.log("Tổng điểm:", total(7, 8, 9, 10));
  
    // 4️ Promise + async/await (giả lập API)
    function fakeFetchUser() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ id: 1, name: "Minh", role: "Intern" });
        }, 1500);
      });
    }
  
    async function showUser() {
      console.log("Đang tải dữ liệu...");
      const user = await fakeFetchUser();
      console.log(`Tải xong: ${user.name} - ${user.role}`);
    }
    showUser();
  
    // 5️ Mini project - Danh sách thực tập sinh
    const interns = [
      { id: 1, name: "Phú", skill: "JavaScript" },
      { id: 2, name: "Lan", skill: "UI/UX" },
    ];
  
    function addIntern(name, skill) {
      interns.push({ id: interns.length + 1, name, skill });
    }
  
    function showInterns() {
      console.log("Danh sách thực tập sinh:");
      interns.forEach(({ id, name, skill }) => {
        console.log(`- [${id}] ${name} (${skill})`);
      });
    }
  
    addIntern("Hà", "ReactJS");
    showInterns();
  
    console.log("DEMO HOÀN TẤT");
  }
  
  // Gắn hàm ra window để gọi từ HTML
  window.runDemo = runDemo;
  