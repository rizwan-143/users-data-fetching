 let foundUser  = JSON.parse(localStorage.getItem("foundUser")) || [];
 let userData  = JSON.parse(localStorage.getItem("userData")) || [];
 let logout = document.getElementById("logout");
 let userName = document.getElementById("user-name");
 let loadingState = document.getElementById("loading-state");




 userName.innerText = foundUser.name || "hello guest";

 let userId = document.getElementById("user-id");
 let usertitle = document.getElementById("user-title");
 let userComplete = document.getElementById("user-complete");

 setTimeout(() => {
    loadingState.style.display = "none";
    userId.innerText = `user id : ${userData.userId}`;
 usertitle.innerText = `user Title : ${userData.title}`;
 userComplete.innerText = `complete : ${userData.completed}`;
 }, 3000);

 logout.addEventListener("click" , function(){
    loadingState.style.display = "block";
    loadingState.innerText =  "user logging out ......";
    userId.style.display = "none";
    usertitle.style.display = "none";
    userComplete.style.display = "none";

    setTimeout(() => {
        localStorage.removeItem(foundUser);
    window.location.href = "./index.html";
    }, 2000);
 })
 