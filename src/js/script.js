// 1. 選取 DOM 元素
const birthdateInput = document.getElementById("birthdate");
const calculateBtn = document.getElementById("calculateBtn");
const dogAgeP = document.getElementById("dogAge");
const humanAgeP = document.getElementById("humanAge");

// 🔑 定義 LocalStorage 的 Key 名稱
const STORAGE_KEY = "hermione_dog_birthday";

/**
 * [讀取功能] 
 * 網頁一載入，先去小抽屜 (LocalStorage) 檢查有沒有存過的生日
 */
window.addEventListener("DOMContentLoaded", () => {
  const savedDate = localStorage.getItem(STORAGE_KEY);
  if (savedDate) {
    birthdateInput.value = savedDate;
    console.log("已從本地儲存讀取生日：" + savedDate);
    // 如果想一進來就幫她計算，可以加這一行：
    // calculate(); 
  }
});

/**
 * [計算核心邏輯]
 */
function calculate() {
  const birthdate = birthdateInput.value;

  if (!birthdate) {
    alert("請先輸入出生年月日！");
    return;
  }

  // 💾 [儲存功能] 將輸入的日期存入 LocalStorage
  localStorage.setItem(STORAGE_KEY, birthdate);

  const birth = new Date(birthdate);
  const today = new Date();

  // 判斷是否選了未來的日期
  if (birth > today) {
    alert("出生日期不能大於今天喔！");
    return;
  }

  // 計算狗狗實際年齡 (以毫秒計算換算成歲)
  let ageInMilliseconds = today - birth;
  let ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
  ageInYears = Math.floor(ageInYears * 10) / 10; // 保留一位小數

  // 換算成人類年齡
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
}

// 2. 綁定點擊事件
calculateBtn.addEventListener("click", calculate);