## 什麼是 DOM？

DOM 的全名是 Document Object Model，文件物件模型，是瀏覽器提供的橋樑，連結 HTML 文件和 JavaScript（也可以是別的程式語言，但較少見）。

瀏覽器會將 HTML 文件建立成一棵 DOM 樹，上面有各式各樣的節點，而節點主要有：  

    1. Document: 文件節點，代表整份 HTML 文件。
    2. Elememt: 標籤元件節點，代表各種 HTML 標籤，像是 div、button 等等
    3. Attribute: 屬性節點，代表 class、id 等等
    4. Text: 文字節點，被標籤包起來的文字們

此時，JavaScript 就可以操控這些節點改變它們，或拿到它們的資料。  
  
想像的概念長這樣 XD ↓ ↓ ↓ DOM 可以讓 JS 去取想要的元素。

![DOM 樹採收機的圖片](https://upload.cc/i1/2020/11/16/kO1x4s.jpg)

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
  
寫作業寫到一半發現不懂為甚麼事件要冒泡回來，甚至不知道在傳遞的「事件」是甚麼，所以重新讀了 realdennis 前輩的 [事件 (Event) 的註冊、觸發與傳遞](https://reurl.cc/R1gm09)、Kuro Hsu 前輩的 [重新認識 JavaScript: Day 14 事件機制的原理](https://reurl.cc/Ldgqle)，最終發現一開始對事件傳遞機制的認知完全錯誤XD，所以以下重新開始！

---------------------------------------
### 關於事件

realdennis 前輩的解釋是「**服務各個行為**」，使用者會在頁面點東點西、滑來滑去，當他們點到像是某些按鈕時，那個按鈕會產生相對應的行為。所以事件是使用者對按鍵做了甚麼（例如：點擊），就要發生甚麼事（例如：刪除），而後面接的函式處理怎麼做要發生的事（例如：如何實作刪除）。
  
---------------------------------------
### 事件流程
  
Kuro Hsu 前輩寫到「**事件流程是網路元素接收事件的順序**」  

HTML 文件的節點們多半是一層包一層，例如 html 包了 body，body 包了 nav，nav 包了 div，div 包了 button，那點下 button 時，到底是先點到 html 還是 body 還是 nav 還是 div 還是 button 呢？  
  
這影響到，如果這四層元素都掛上事件監聽器，被點擊後會進行不同的動作，那會從哪個動作開始做呢？  
  
此時順序分為兩種，一種是捕獲、一種是冒泡。
  
捕獲階段是從最外層到最內層，冒泡階段是從最內層到最外層，以上面的例子來看：  
  
捕獲階段：html → body → nav → div → button  
冒泡階段：button → div → nav → body → html  
  
每一次的觸發，一定都會先捕獲，並且再冒泡，你在程式裡設定 addEventListener 的 True 還是 False 會決定以哪種順序呼叫函式來處理事件，但不會因此讓你的程式變成先冒泡、再捕獲。
  
所以假如：  
點擊 html 會 console.log('1')、  
點擊 body 會 console.log('2')、   
點擊 nav 會 console.log('3')、   
點擊 div 會 console.log('4')、   
點擊 button 會 console.log('5')。  
  
addEventListener 如果設定為 true 就會是捕獲階段，你會得到 12345  
addEventListener 如果設定為 false 就會是冒泡階段，你會得到 54321  
  
另外大部分是預設使用 false 冒泡階段。

## 什麼是 event delegation，為什麼我們需要它？
  
event delegation，事件代理，是一種能讓大家偷很多很多懶的聖物。  
  
如果有一萬個按鈕就要打一萬次 addEventListener，那現在應該沒有人要轉職工程師，但還好我們有事件傳遞機制，我們有機會可以只要打一次 addEventListener 就好。  
  
如果你的按鈕們有一個共同的節點，你就可以將 addEventListener 加在那個共同的節點上，因為事件會冒泡或捕獲，那個共同節點一定也會被觸發到。 

~~在唯一的道路上堵人，就是 event delegation 的真理。~~

舉例的實作方式是在共同節點上掛 addEventListener，當那個節點被觸發時，就去尋找到底真正被點擊的最底部 target 節點是誰。
  
有點像老師、班長、同學們，班長負責收聯絡簿，所有人交聯絡簿都會經過班長這一關。當老師想問誰有交時，不需要一個一個同學挨家挨戶地問，他只要問收過所有人聯絡簿的班長就好，班長就是那個全班同學的共同節點。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
  
### event.preventDefault()  取消事件的（瀏覽器）預設行為  
  
常見的情況是：  
點擊超連結 `<a>` 會自動跳轉到 href 的新連結，加上 event.preventDefault() 就不會自動跳轉。  
點擊表單中的 `<button>` 會自動將填答內容提交，加上 event.preventDefault() 就不會自動提交。  
點擊核取方塊 ` <input type="checkbox"/>` 會自動顯示勾選，加上 event.preventDefault() 就不會勾選一直維持空方框。  
  
另外 event.preventDefault() 成立時，事件仍然會傳遞。
  
另外我自己混淆或者誤會的地方是：預設應該是瀏覽器的「預設」，所以自己設定的行為沒辦法用 event.preventDefault() 取消。  
  
例如我自己設定 click 某個 div 會改變顏色，無法加上 event.preventDefault() 讓它不變色。但即使如此，當使用 event.cancelable() 確認這個 div 的 click 是否能夠取消時，會顯示 true。所以對應常見情況的核取方塊，click 可以取消行為，但它只能取消內建預設的行為，無法取消我後來設定的行為。
  
### event.stopPropagation()  停止事件  
 
與阻止預設行為不同，這時候整個事件傳遞都被停止了！
 
點擊 html 會 console.log('1')、  
點擊 body 會 console.log('2')、   
點擊 nav 會 console.log('3')、   
點擊 div 會 console.log('4')、   
點擊 button 會 console.log('5')。   
預設使用冒泡。  
  
這時候在 nav 加上 event.stopPropagation()，那我們會得到 543  
body 和 html 就像沒有被點到一樣，等於不會觸發事件、不會做任何事情。