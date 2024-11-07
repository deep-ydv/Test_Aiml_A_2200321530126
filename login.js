const userid=document.getElementById('userid');
const password=document.getElementById('password');
const login=document.getElementById('login');
login.addEventListener("click",(e)=>{
  if(userid.value=="admin" && password.value=="admin")console.log("working") 
  else{
  e.preventDefault();
  alert("Invalid Userid and Password");
  }


})

