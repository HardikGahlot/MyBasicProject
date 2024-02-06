
// Registration
let resemail = document.querySelector(".resemail")
let respass = document.querySelector(".respass")

let btn_res = document.querySelector(".btn_res")






// login

let log_email = document.querySelector(".log_email")

let log_pass = document.querySelector(".log_pass")

let btn_log = document.querySelector(".btn_log")




btn_res.addEventListener("click", function(){

    resemail.value 
    respass.value 
 
  let rs = [];

  rs.push(
    {
        email:resemail.value,
        pass:respass.value ,

    }
  )

  localStorage.setItem("rs", JSON.stringify(rs))
})




btn_log.addEventListener("click", function(){



let rs = JSON.parse(localStorage.getItem("rs"))

    rs[0].email;
    rs[0].pass;


    if(rs[0].email==log_email.value  &&  rs[0].pass== log_pass.value){
      
        location.href="admin.html"

    }


    else{
        alert("worng")
    }



})