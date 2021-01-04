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
  
捕獲階段是從最外層到最內層，冒泡階段是從最內層到最外層，以上面的例子來看：  
  
捕獲階段：html → body → nav → div → button  
冒泡階段：button → div → nav → body → html
  
每一次的觸發，一定都會先捕獲，並且再冒泡，你在程式裡設定 addEventListener 的 True 還是 False 會決定以哪種順序傳遞、以哪種順序呼叫函式來處理事件。  


## 什麼是 event delegation，為什麼我們需要它？


## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
