import axios from "axios"
import { useRef } from "react"


const CreatePostForm = ({ setRefresh }) => {
    const titleRef = useRef()
    const contentRef = useRef()
    const authorRef = useRef()

    const handleSubmit = async () => {
        const newPost = {
            title: titleRef.current.value,
            content: contentRef.current.value,
            author: authorRef.current.value
        }
        const response = await axios.post("/api/addPost", newPost)

        console.log(response)
        setRefresh(prev => !prev)
    }

    return (
        <div>
            <input type="text" placeholder="title" ref={titleRef}></input>
            <input type="text" placeholder="content" ref={contentRef}></input>
            <input type="text" placeholder="author" ref={authorRef}></input>
            <input type="file" placeholder="image"></input>
            <button onClick={handleSubmit} type="button">Send</button>
        </div>
    )
}
export default CreatePostForm