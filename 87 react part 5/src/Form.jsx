import { useState } from "react"

export default function Form() {

    // let [fullName, setFullName] = useState("");
    // let handleChange = (event) => {
    //     setFullName(event.target.value);
    // }

    let [formData, setFormData] = useState({
        fullName: "",
        userName: ""
    })

    let handleInputChange = (event) => {
        let fieldName = event.target.name
        let newVal = event.target.value
        setFormData((currData) => {
            currData[fieldName] = newVal
            return { ...currData }
        })

    }

    let handleSubmit = (event) => {
        event.preventDefault()
        setFormData({
            fullName: "",
            userName: ""
        })
    }


    return (

        <form onSubmit={handleSubmit} >
            <label htmlFor="fullname">Full Name : </label>
            <input type="text" id="fullname" placeholder="Enter your Full Name : " value={formData.fullName} name="fullName" onChange={handleInputChange} />
            <br /><br />
            <label htmlFor="username">UserName : </label>
            <input type="text" id="username" placeholder="Enter your Full Name : " value={formData.userName} name="userName" onChange={handleInputChange} />
            <button>Submit</button>
        </form>

    )
}