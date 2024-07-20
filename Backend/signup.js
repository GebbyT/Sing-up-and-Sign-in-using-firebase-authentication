import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCbduQFpqaIsyMK91tUB7hwLp2xkUqaEwQ",
    authDomain: "sign-in-sign-up-ethioware.firebaseapp.com",
    projectId: "sign-in-sign-up-ethioware",
    storageBucket: "sign-in-sign-up-ethioware.appspot.com",
    databaseURL:"https://sign-in-sign-up-ethioware-default-rtdb.asia-southeast1.firebasedatabase.app",
    messagingSenderId: "30362462055",
    appId: "1:30362462055:web:4b21a5982ec01c7bb071c2"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);


document.getElementById("signUpForm").addEventListener('submit',async(e)=>{
    e.preventDefault();
    const telegramname=document.getElementById("telegramUsername").value;
    const  password=document.getElementById("password").value;
    const email=document.getElementById("email").value;
    console.log(telegramname);
    console.log(password);
    console.log(email);
    const userCredential= await createUserWithEmailAndPassword(auth,email,password)
    const user=userCredential.user
try{
    await set(ref(db,'users/' +user.uid),{
        telegramname:telegramname,
        email:email,
        password:password,

    })
alert("singed up sucess fully");
}
catch(err){
    console.log(err.message);
    console.log(err.stack);
}

})
document.getElementById("signin").addEventListener('submit',async(e)=>{
e.preventDefault();
const email1= document.getElementById("emailsign").value;
const password1=document.getElementById("passwordsign").value;
console.log(email1);
console.log(password1);
})


export default app;
