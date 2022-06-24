import axios from "axios";
import React, { useRef, useState } from "react";

const ModalMode = ({close})=>{
    const ref = useRef(null);
    const NameRef = useRef(null);
    const UsernameRef = useRef(null);
    const EmailRef = useRef(null);
    const AddressRef = useRef(null);
    const PhoneRef = useRef(null);
    const WebsiteRef = useRef(null);
    const CompanyRef = useRef(null);

    const sendData = ()=>{
        ref.current.style.display= "none";
        const promise = axios.post("https://jsonplaceholder.typicode.com/users",{        
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz",
                address: {
                    street: "Kulas Light",
                    suite: "Apt. 556",
                    city: "Gwenborough",
                    zipcode: "92998-3874",
                geo:{
                    "lat": "-37.3159",
                    "lng": "81.1496"
                    }
                }
        })
        promise.then((response)=>{console.log(response.data);})
        .catch((err)=>{console.log(err);})

    }

    return(
        <>     
        <div className="modal-c" ref={ref}>
            <div >
                <button className="btn--x" onClick={()=>{close(false)}}>x</button>
                <div>
                <h6>Name</h6>
                <input ref={NameRef} className="in" type="text" placeholder="Name">
                </input> <br/>
                <h6>Username</h6>   
                <input ref={UsernameRef} className="in" type="text" placeholder="Username">
                </input> <br/><br/>
                <h6> Email</h6>   
                <input ref={EmailRef} className="in" type="text" placeholder="Email">
                </input> <br/> <br/>
                <h6> Address</h6>
                 <input ref={AddressRef} className="in" type="text" placeholder="Address">
                </input> <br/> <br/>
                <h6> Phone</h6>   
                <input ref={PhoneRef} className="in" type="text" placeholder=" Phone number">
                </input> <br/> <br/>
                <h6>Website</h6> 
                <input ref={WebsiteRef} className="in" type="text" placeholder="Website"></input>       
                <h6>Company</h6>
                <input ref={CompanyRef} className="in" type="text" placeholder="Company"></input>       
            </div>
               
                    <button className="btn--c" onClick={()=>{close(false)}}>Cancel</button>
                    <button className="btn--s" onClick={sendData} >Add</button>
                
            </div>
        </div>
        </>

    )
 }
const AddBtn = ()=>{
    const [state,setState] = useState(false);

    return(
        <>
        <button className="btn-" 
        onClick={()=>{
            setState (true)
        }}
        >Add</button>
        {state && <ModalMode close={setState}/>}
        </>
    )
}

export default AddBtn;