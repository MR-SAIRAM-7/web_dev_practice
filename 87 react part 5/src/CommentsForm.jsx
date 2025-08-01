import { useState } from "react"
import './Comment.jsx'
import { useFormik } from "formik"

export default function CommentsForm({ addNewComment }) {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5,

    })

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value }
        })

    }

    let handleSubmit = (event) => {
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: 5,
        })
    }

    return (
        <div><h4>Give a Comment!!</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">UserName : </label>
                <input type="text" name="username" id="username" placeholder="username" value={formData.username} onChange={handleInputChange} />
                <br /> <br />
                <label htmlFor="remarks">Comment : </label>
                <textarea name="remarks" id="remarks" placeholder="remarks" value={formData.remarks} onChange={handleInputChange}></textarea>
                <br /> <br />
                <label htmlFor="rating">Rating : </label>
                <input type="number" name="rating" id="rating" placeholder="rating" min={1} max={5} value={formData.rating} onChange={handleInputChange} />
                <br /> <br />
                <button>Add Comment</button>
            </form>
        </div>
    )
}