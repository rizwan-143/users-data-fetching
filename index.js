

let myForm = document.getElementById("my-form");

 let foundUser  = JSON.parse(localStorage.getItem("foundUser")) || [];

myForm.addEventListener("submit" , function(event){
    event.preventDefault();

    let loginEmail = event.target.loginEmail.value;

    function getUser(){

        return new Promise(function(resolve , reject){

            fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {resolve(data)
                let emails = data.map((users) =>  {return users.email} );
                console.log(emails)

            })
            .catch((error) => reject(error));

        })

    }


    getUser().then((response) => {console.log(response)
        let foundUser = response.find((user) => loginEmail === user.email);
        // console.log(user)
        if(foundUser){
            localStorage.setItem("foundUser" , JSON.stringify(foundUser));
            return new Promise(function(resolve , reject){
                fetch("https://jsonplaceholder.typicode.com/todos")
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((error) => reject(error));
            })
            .then((response) => {
                console.log(response)
                
                let userData = response.find((user) => user.id === foundUser.id);
                if(userData){
                    localStorage.setItem("userData" , JSON.stringify(userData));
                    window.location.href = "./home.html"; 

                }else{
                    alert("no user found !");
                }

                // let userDetail = response.find((user) =>)
            })

        }else{
            alert("invalid Email !")
        }
    })
    .catch((error) => console.log(error))

    event.target.reset();

});