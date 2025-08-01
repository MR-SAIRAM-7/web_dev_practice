import { useState } from "react"
import "./Comment.css"
import CommentsForm from "./CommentsForm"

export default function Comment() {
    let [comments, setCommets] = useState([{
        username: "@sample",
        remarks: "Sample remark",
        rating: 4,
    }])

    let addNewComment = (comment) => {
        setCommets((currComments) => [...currComments, comment])
    }

    return (
        <>
            <CommentsForm addNewComment={addNewComment} />
            <hr />
            <div>
                <h3>All Comments : </h3>
                {comments.map((comment, idx) => (
                    <div className="Comment" key={idx}>
                        <span>{comment.remarks}</span>
                        &nbsp;&nbsp;&nbsp;
                        <span>{comment.rating}</span>
                        &nbsp;&nbsp;&nbsp;
                        <p>-{comment.username}</p>
                    </div>

                ))}
            </div>


        </>
    )
}