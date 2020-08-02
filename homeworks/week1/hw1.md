## 交作業流程

(首先要有一股終於要寫功課的意志力)  
(打開 Git Bash)  

$ .....-cheche-Lei (master)>> **git branch**  [ 打一個名稱：例如 week1 ]   
// **務必要開一個 branch 寫作業**  

$ .....-cheche-Lei (master)>> **git checkout**  [ 剛才的名稱：例如 week1 ]  
// **轉移戰場到那個 week1 branch**
  
(喀搭喀搭打作業)  
(打好之後存檔)  
(你就會有一個更動的檔案)  

$ .....-cheche-Lei (week1)>> **git add .**  
$ .....-cheche-Lei (week1)>> **git commit - am **  "[ 剛才的名稱：例如 week1 ]"
  
(一週的作業都完成後)  
(作業交起來)  
  
$ .....-cheche-Lei (week1)>> **git push origin**  [ 剛才的名稱：例如 week1 ]
  
(進到 GitHub - Lidemy/mentor-program...)  
(進入 pull requests)  
(就會出現綠色的提示)  
(點選 compare and...)  
(打個標題：例如 week1 作業)  
(有問題就留個問題)   
(檢查一下底下程式碼是不是你新改的)  
  
(進入 Lidemy 學習系統)  
(選擇新增作業)  
(選第幾週)  
(然後複製 GitHub 交 week1 作業的畫面連結)
  
(等待助教改完 merge 你)
  
(被 merge 後打開 Git Bash)  
  
$ .....-cheche-Lei (week1)>> **git checkout master**  
// 回到 master 主幹  
  
$ .....-cheche-Lei (master)>> **git pull origin master**  
// 同步遠端和 local  

$ .....-cheche-Lei (master)>> **git branch -d ** [ 剛才的名稱：例如 week1 ]  
// 刪除掉分支 branch
  
( Do Re Mi So 完成一週的作業)
