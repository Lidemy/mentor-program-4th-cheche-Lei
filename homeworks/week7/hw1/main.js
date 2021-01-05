// Selectors 選取器們
const formElement = document.querySelector('form');
// Fuction 程式們
// 如何進行 verification 驗證？要驗證甚麼？
function verification(e) {
  // 阻止預設的 submit 送出行為，因為我們要驗證和 alert
  e.preventDefault();
  // 紀錄表單狀態，是否有任何一個輸入框有錯誤
  let hasError = false;
  // 紀錄最後要 alert 輸出的資料內容
  const values = {};
  // 驗證文字區域
  const inputs = document.querySelectorAll('.required input[type=text]');
  for (let i = 0; i < inputs.length; i += 1) {
    const input = inputs[i];
    // 因為元素之間有空格，所以必須取隔壁的隔壁
    const textWarning = input.nextSibling.nextSibling;
    // values 為一個物件，中括號為 key 值（input 的 name），等於後面為 value 值（input 的 value）
    values[input.name] = input.value;
    // 確認 input 有沒有 value，代表有沒有填答
    if (!input.value) {
      // 如果 value 為空，則顯示警告
      textWarning.classList.add('warning__appear');
      // 並且將表單狀態標示為有錯誤
      hasError = true;
    } else {
      // 如果 value 有值，則撤銷警告
      textWarning.classList.remove('warning__appear');
    }
  }
  // 驗證單選區域
  const radio = document.querySelectorAll('.radio');
  // 紀錄是否有被勾選的選項
  const radioCheck = [];
  // 將被勾選的選項 values 物件中
  for (let j = 0; j < radio.length; j += 1) {
    if (radio[j].checked) {
      radioCheck.push(radio[j]);
      values[radio[j].name] = radio[j].value;
    }
  }
  const radioWarning = document.querySelector('.radio__warning');
  // 如果被勾選選項陣列的長度為 0，代表沒有東西，代表沒有選取
  if (radioCheck.length === 0) {
    radioWarning.classList.add('warning__appear');
    hasError = true;
  } else {
    radioWarning.classList.remove('warning__appear');
  }
  // 放入其他資料，其他資料並非必填，所以不做驗證
  const suggest = document.querySelector('.suggest');
  values[suggest.name] = suggest.value;
  // 假如表單狀態沒有錯誤，則 alert 輸出表單資料內容
  if (!hasError) {
    alert(JSON.stringify(values));
  }
}
// EventListener 監聽器們
// 當 form 被 submit 時，啟動 verification 驗證程序
formElement.addEventListener('submit', verification);
