  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBHxTH8ovOOZISM6mq0-w8VBQuH3lfwFv8",
    authDomain: "vijnanam-website.firebaseapp.com",
    projectId: "vijnanam-website",
    storageBucket: "vijnanam-website.appspot.com",
    messagingSenderId: "887378719448",
    appId: "1:887378719448:web:840c11ab609602878d1dad",
    measurementId: "G-Z00S84KMQD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



document.getElementById('formReg').addEventListener('submit',function(e){
e.preventDefault();


var button = document.getElementById("sbn");

var load = document.getElementById('load')

load.style.display="block";

button.innerHTML='Please Wait..';




// var user2 = document.getElementById('email');
// var pass = document.getElementById('password');
var phone = document.getElementById('ph');
var userName = document.getElementById('fname');
var age = document.getElementById('age');
var class1 = document.getElementById('cls');
var delivery = document.getElementById('dlv');
var dboy = document.getElementById('dboy');
var time = document.getElementById('time');
var status = document.getElementById('status')
var dataemail =document.getElementById('dataemail');
firebase.auth().signInAnonymously().then(function(response){
  firebase.database().ref('winners').push({
    userName: userName.value,
    age:age.value,
    class1:class1.value,
    dboy:dboy.value,
    time:time.value,
    status:status.value,
    delivery:delivery.value,
    userId:firebase.auth().currentUser.uid,
    phone : phone.value})
    // email:firebase.auth().currentUser.email})
    success();

    firebase.auth().signOut();
    userName.value='';
    age.value='';
    class1.value='';
    delivery.value='';
    phone.value='';
    dboy.value='';
    status.value='';
    time.value='';
  
}).catch(function(error){
  var errorCode= error.code;
  var errorMessage=error.message;
  console.log(errorCode);
  console.log(errorMessage);
  alert(errorMessage);
});


});




firebase.database().ref('winners').on('value' , (data)=>{
  let users=data.val();
  var userName1 = document.getElementById('fname');
  document.getElementById('tableUsers').innerHTML='';
  for (const user in users){
    document.getElementById('tableUsers').innerHTML+=`
    <tr>
    <td><h5 class="text12">${users[user].userName}</h5></td>
    <td><h5 class="text13">${users[user].status}</h5></td>
    <td><h5 class="text14">${users[user].time}</h5></td>
    <td><h5 class="text14">${users[user].dboy}</h5></td>
    </tr>
    `;
    document.getElementById('loading').style.display="none";
    
  }
  //username=${users[user].userId}



});


function success(){
  window.location.href="success.html"
}









{/* <tr>
 <td>${users[user].userId}</td>
<td>${users[user].userName}</td>
<td id="dataemail">${users[user].email}</td>
<td>${users[user].role}</td>
</tr> 

WithEmailAndPassword  */}