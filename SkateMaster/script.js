
function signUp(){
     var result = confirm('Confirm?');
     if (result == false) {
          event.preventDefault();
     }else{
          var name = prompt("Enter your Email: ");
          if(name == null || name == ""){
               txt = "No email provided";
          }else{
               txt = "Email will be sent shortly!";
          }
          alert(txt);
     }
}
