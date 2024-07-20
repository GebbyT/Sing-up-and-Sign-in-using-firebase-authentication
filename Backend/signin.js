import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCbduQFpqaIsyMK91tUB7hwLp2xkUqaEwQ",
    authDomain: "sign-in-sign-up-ethioware.firebaseapp.com",
    projectId: "sign-in-sign-up-ethioware",
    storageBucket: "sign-in-sign-up-ethioware.appspot.com",
    databaseURL:"https://sign-in-sign-up-ethioware-default-rtdb.asia-southeast1.firebasedatabase.app",
    messagingSenderId: "30362462055",
    appId: "1:30362462055:web:4b21a5982ec01c7bb071c2"
  };
const app =initializeApp(firebaseConfig)
const auth=getAuth(app)


document.getElementById("signin").addEventListener('submit',async(e)=>{
    e.preventDefault();
    const email1= document.getElementById("emailsign").value;
    const password1=document.getElementById("passwordsign").value;
    if (email1==null || password1==null){
      alert("input both password and email");

    }
    try{
    const userCredential=await signInWithEmailAndPassword(auth,email1,password1)
    if (userCredential){
        alert(userCredential.user.email );
    }
   else{
    alert("your do not the credential, check the password or the email")
   }
    }
catch(err){
    alert("user not credential")
}
}

)
    
    
    
