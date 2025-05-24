 let foundUser  = JSON.parse(localStorage.getItem("foundUser")) || [];
 let userData  = JSON.parse(localStorage.getItem("userData")) || [];
 let logout = document.getElementById("logout");
 let userName = document.getElementById("user-name");

 userName.innerText = foundUser.name || "hello guest";

 let userId = document.getElementById("user-id");
 let usertitle = document.getElementById("user-title");
 let userComplete = document.getElementById("user-complete");

 userId.innerText = `user id : ${userData.userId}`;
 usertitle.innerText = `user Title : ${userData.title}`;
 userComplete.innerText = `complete : ${userData.completed}`;

 logout.addEventListener("click" , function(){
    localStorage.removeItem(foundUser);
    window.location.href = "./index.html";
 })
 