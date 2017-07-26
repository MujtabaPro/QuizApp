 // Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() 
{
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() 
{
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) 
{
    if (event.target == modal) 
    {
        modal.style.display = "none";
    }
}

// LOGIN Function
function Login() {
   var userName = document.getElementById('name').value
    var userEmail = document.getElementById('email'); 
    var userPassword = document.getElementById('pass'); 
    var error = document.getElementById('error')
    var eMail = 'Mujtabahanif10@gmail.com';
    var psd = 'MujtabaPro'; 

    if (userEmail.value === eMail && userPassword.value === psd) {
        show('course');
        document.getElementById('usrName').innerHTML = userName;
        document.getElementById('userEmail').value = '';
        document.getElementById('userPassword').value = '';
    }
    else if (userEmail === '' || userPassword === '') {
        alert('Please Fill Email & Password');
    }
 
         
       

}



// show the given page, hide the rest
function show(elementID) 
{
    var ele = document.getElementById(elementID);
    if (!ele) 
    {
        alert("no such element");
        return;
    }
    var pages = document.getElementsByClassName('page');
    for(var i = 0; i < pages.length; i++) 
    {
        pages[i].style.display = 'none';
    }
    ele.style.display = 'block';
}

//KEY for test startttttt
function key()
{
    var html5_key = document.getElementById('key').value
    
    if(html5_key == '')
    {
        alert('Enter Key Value')
    }
    else if(html5_key == 'JsQuiz')
    {
        location = ("Quizs/quiz.html");
    }
    else
    {
        alert('Invalid Key');
    }
}
