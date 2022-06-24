import axios from "axios";
import React, { useRef, useState } from "react";
import "../Style/Rows.css"
export function Rows(props){

    let {id, name, username , email, phone, address,website, company}= props;
    const ref = useRef(null);
    const [nameValue, setNameValue] = useState(name);
    const [usernameValue, setUsernameValue] = useState(username);
    const [emailValue, setEmailValue] = useState(email);
    const [phoneValue, setPhoneValue] = useState(phone);
    const [companyValue, setCompanyValue] = useState(company);
    const [websiteValue, setWebsiteValue] = useState(website);
    const [addressValue, setAddressValue] = useState(address);
    function displayWindow() {
        ref.current.style.display = "block";
    }
    function close() {
        ref.current.style.display = "none";
    }
    function handleChangeName(e) {
        setNameValue(e.target.value)
    }
    function handleChangeUser(e) {
        setUsernameValue(e.target.value)
    }
    function handleChangeEmail(e) {
        setEmailValue(e.target.value)
    }
    function handleChangePhone(e) {
        setPhoneValue(e.target.value)
    }
    function handleChangeWeb(e) {
        setWebsiteValue(e.target.value)
    }
    function handleChangeCom(e) {
        setCompanyValue(e.target.value)
    }
    function handleChangeAddres(e) {
        setAddressValue(e.target.value)
    }
    function updateData(e) {
        e.preventDefault();
        ref.current.style.display = "none";
        const promise = axios.patch("https://jsonplaceholder.typicode.com/users/1", {
            name : nameValue,
            username : usernameValue,
            email : emailValue,
            address : {
                street : addressValue,
                city : "",
                zipcode :"",
                geo : {
                    lat : "",
                    lng : "",
                }
            },
            phone : phoneValue,
            website : websiteValue,
            company : {
                name : companyValue,
                catchPhrase : "",
                bs : ""
            }
        })

        promise.then((response)=>{
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return(
        <>
            <tr onClick={displayWindow}>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td>{phone}</td>
                <td>{website}</td>
                <td>{company}</td>
            </tr>
            <div ref={ref}></div>
            <div className="container2 modal modal-c container" ref={ref}>
            <div >
                <button className="btn--x pos" onClick={()=>{close(false)}}>x</button>
                    <div>
                    <h6 className="h6">Name</h6>
                        <input  className="in in-" type="text" value={nameValue} onChange={handleChangeName}>
                        </input> <br/>
                    <h6 className="h6">Username</h6>   
                        <input  className="in in-" type="text" value={usernameValue} onChange={handleChangeUser}>
                        </input> <br/><br/>
                    <h6 className="h6"> Email</h6>   
                        <input  className="in in-" type="text" value={emailValue} onChange={handleChangeEmail}>
                        </input> <br/> <br/>
                    <h6 className="h6"> Address</h6>
                        <input  className="in in-" type="text" value={phoneValue} onChange={handleChangePhone}>
                        </input> <br/> <br/>
                    <h6 className="h6"> Phone</h6>   
                        <input  className="in in-" type="text" value={addressValue} onChange={handleChangeAddres}>
                        </input> <br/> <br/>
                    <h6 className="h6">Website</h6> 
                        <input  className="in in-" type="text" value={websiteValue} onChange={handleChangeWeb}>
                        </input>       
                    <h6 className="h6">Company</h6>
                        <input  className="in in-" type="text" value={companyValue} onChange={handleChangeCom}>
                        </input>       
                </div>
                <br/>
            </div>
            <button className="btn--c btn--" onClick={()=>{close(false)}}>Cancel</button>
            <button className="btn--s " onClick={updateData} >Update</button>
            <br/>
            </div>
        </>
    )
}