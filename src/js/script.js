// script.js
const calculateBtn = document.getElementById("calculateBtn");
const dogAgeP = document.getElementById("dogAge");
const humanAgeP = document.getElementById("humanAge");

calculateBtn.addEventListener("click", () => {
  const birthdate = document.getElementById("birthdate").value;
  if (!birthdate) {
    alert("請先輸入出生年月日！");
    return;
  }

  const birth = new Date(birthdate);
  const today = new Date();

  // 計算狗狗年齡
  let ageInMilliseconds = today - birth;
  let ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
  ageInYears = Math.floor(ageInYears * 10) / 10; // 保留一位小數

  // 換算成人類年齡（簡單公式）
  let humanAge;
  if (ageInYears <= 2) {
    humanAge = ageInYears * 12.5;
  } else {
    humanAge = 25 + (ageInYears - 2) * 4;
  }
  humanAge = Math.floor(humanAge);

  // 顯示結果
  dogAgeP.textContent = `狗狗年齡：${ageInYears} 歲`;
  humanAgeP.textContent = `換算人類年齡：約 ${humanAge} 歲`;
});
