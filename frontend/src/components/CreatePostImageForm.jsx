import axios from "axios"


const CreatePostImageForm = (setRefresh) => {

    

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const response = await axios.post("/api/addPost", formData)
        setRefresh(prev => !prev)
        console.log(response);

        e.target.reset()

    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" name="title" />
            <input type="text" placeholder="Content" name="content" />
            <input type="text" placeholder="AuthorId" name="author" value="64ba45780c899708a7895f94"/>
            <input type="file" placeholder="Image" name="image" />
            <button type="submit">Submit</button>
        </form>
     );
}
 
export default CreatePostImageForm;