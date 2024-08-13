import React, { useState } from "react";

function Form() {
    const [name,setName]= useState("");
    const [nameMessage,setNameMessage]= useState("");

    const [email,setEmail]= useState("");
    const [emailMessage,setEmailMessage]= useState("");

    const [password,setPassword]= useState("");
    const [passwordMessage,setPasswordMessage]= useState("");

 
    function updateName(e){
        setName(e.target.value);
        if (e.target.value.length < 3 ) {
            setNameMessage("Name must be atleast 3 Character");
        }
        else{
            setNameMessage("");
        }
    }

    function updateEmail(e) {
        setEmail(e.target.value);
        if (!e.target.value.includes("@")) {
            setEmailMessage("Email must contain an '@' symbol.");
        } else {
            setEmailMessage("");
        }
    }

    function updatePassword(e) {
        setPassword(e.target.value);
        if (e.target.value.length <8) {
            setPasswordMessage("Password must be 8 Charcter");
        } else {
            setPasswordMessage("");
        }
    }

    return (
        <form className="forms">
            <div className="username">
                <h2>Name:</h2>
                <input type="text" placeholder="Enter Name..."  value={name} onChange={updateName}/><br/>
                <span>{nameMessage}</span>

            </div>
            <h2>Email:</h2>
                <input type="email" placeholder="Enter Mail..."  value={email} onChange={updateEmail}/><br/>
                <span>{emailMessage}</span>

            <div className="password">
            <h2>Password:</h2>
                <input type="password" placeholder="Enter Password..."  value={password} onChange={updatePassword}/><br/>
                <span>{passwordMessage}</span>

            </div>
            <button type="submit">Submit</button>

            <div>

            </div>
        </form>

    )
}
export default Form;