import { useNavigate } from "react-router-dom";
function MyPost ( props ){
    const navigate = useNavigate()

    const editPage = ()=>{
        navigate(`/posts/${props.id}`)
    } 
    return(
        <form onSubmit={editPage}>
            <h2>Title: {props.title}</h2>
            <h2>ID# {props.id}</h2>
            <h2>Description: {props.description}</h2>
            <h2>Author: {props.author.username}</h2>
            <h2>Price: {props.price}</h2>
            <button type="submit">Edit</button>
        </form>
    )
}

export default MyPost;