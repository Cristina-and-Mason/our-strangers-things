import { useNavigate } from "react-router-dom";

function NewPost (props){
    const navigate = useNavigate();
    const TOKEN_STRING = localStorage.getItem("token");
    async function newPostReq(event) {
        event.preventDefault();
        try {
            const response = await fetch("https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${TOKEN_STRING}`
                },
                body: JSON.stringify ({
                    post: {
                    title: props.newPostTitle,
                    description: props.newPostDesc,
                    price: props.newPostPrice,
                    location: null
                }
                })   
            })
            const translatedData = await response.json();
            navigate('/posts')
            return translatedData
            
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <form onSubmit={newPostReq}>
            <label>New Post Title:</label>
            <input 
            title="title" 
            type="text" 
            placeholder="Your title goes here"
            value={props.newPostTitle}
            onChange={(event) => {
                props.setNewPostTitle(event.target.value)
            }}
            ></input><br/>
            <label>New Post Description:</label>
            <input 
            name="description" 
            type="text" 
            placeholder="Your description goes here"
            value={props.newPostDesc}
            onChange={(event) => {
                props.setNewPostDesc(event.target.value)
            }}
            ></input><br/>
            <label>New Post Price:</label>
            <input 
            name="price" 
            type="text" 
            placeholder="Your price goes here"
            value={props.newPostPrice}
            onChange={(event) => {
                props.setNewPostPrice(event.target.value)
            }}
            ></input><br/>
            <button type="submit">Create New Post</button>
        </form>
    )
}

export default NewPost;