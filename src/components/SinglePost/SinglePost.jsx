import { useNavigate } from "react-router-dom";
function SinglePost ( props ){
    const navigate = useNavigate()

    const messagePage = ()=>{
        navigate(`/posts/${props.id}/messages`)
    } 
    return(
        <form onSubmit={messagePage}>
            <h2>Title: {props.title}</h2>
            <h2>ID# {props.id}</h2>
            <h2>Description: {props.description}</h2>
            <h2>Author: {props.author.username}</h2>
            <h2>Price: {props.price}</h2>
            <button type="submit">Messages</button>
        </form>
    )
}

export default SinglePost;