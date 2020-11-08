
headerTemplate();
footerTemplate();
loginModal();
contactModal();

function headerTemplate() {
let headerTemplate=` <div class="view2">
                <div style="margin-left: 1%;">
                  <a id="link" class="font" href="index.html" ><img id="img1" class="align"  src="assests/images/logo.png"  alt=logo></a>
                </div>
                <div style="margin-right:2%">
                    <!-- <a id="link" class="font" href="login.html" target="_blank">Login</a> -->
                    <button type="button" class="btn btn-light" data-toggle="modal" data-target="#loginModal" id="login-in-button">
                        Login
                    </button>  
            </div>
            </div> `
document.getElementById("headernav").innerHTML=headerTemplate;
}

function footerTemplate(){
let footerTemplate =`  <div class="view2">
                <div style="margin-left: 2%;padding-left: 0%;">
                        <button id ="contact" type="button" class="btn btn-info" data-toggle="modal" data-target="#contactmodal">Contact US</button>
                    
                </div>
                <div class="font size text padding">
                    &#169;2020 ROOM SEARCH PVT.LTD.
                </div>
                <div class="font">  
                    <a id="link"  href ="https://www.facebook.com" target="_blank"><img id="img3" src="assests/images/facebook.png"></a>
                    <a id="link"  href ="https://www.instagram.com" taget="_blank"><img id="img3" src="assests/images/instagram.png"></a> 
                    <a id="link"  href ="https://www.twitter.com" target="_blank"><img  id="img3"src="assests/images/twitter.png"></a>
                </div> 
            </div>`
document.getElementById("footernav").innerHTML=footerTemplate;
}

function loginModal(){
let loginModal = `<div class="modal-dialog">
        <div class="modal-content">


            <div class="modal-header">
                <h3 class="modal-title">Please Login</h3>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>


            <div class="modal-body" id="login-body">
                <form action="#" class="login" id="loginform" autocomplete="off"> 
                    <label for="username" style="margin-top: 30px;">Username:</label>
                    <input type="text" id="user" name="username" placeholder="Username" style="margin-left: 50px;"><br>
                    <label for="Password" style="margin-top: 30px;">Password:</label>
                    <input type="password" name="password" placeholder="Password" id="pass" style="margin-left: 52px;">
                </form>
            </div>


            <div class="modal-footer" id="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal" id="loginbtn"  onclick=" userlogin()">Login</button>
            </div>

        </div>
        </div>`

document.getElementById("loginModal").innerHTML=loginModal;   
} 

function contactModal(){
let contactTemplate= ` <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h3 class="modal-title">Get in Touch</h3>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <p>Thank you for reaching out !!!</p>
                    <p>Please enter your email address we will get back to you.</p>
                    <label>Email :</label>
                    <input type="email" name="email" id="email" placeholder="your email">
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Submit</button>
                </div>

            </div>
            </div>`

document.getElementById("contactmodal").innerHTML=contactTemplate;  
}


function userlogin(){
    let username=sessionStorage.setItem("username","admin");
    let password=sessionStorage.setItem("password","admin");
    //  document.getElementById("login-body").innerHTML=sessionStorage.getItem("user");
    //  document.getElementById("login-body").innerHTML=sessionStorage.getItem("pass");
    let user= sessionStorage.getItem("username");                                       //   document.getElementById("username");
    let pass= sessionStorage.getItem("password");                                      //  document.getElementById("password");

    if(user == 'admin' && pass == 'admin') {
        // sessionStroage.isLogin=true;
       alert("Successfully LogedIn...");
       }
    else{
      // alert("Username or password invalid");
       }
}
