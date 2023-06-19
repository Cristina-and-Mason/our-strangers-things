import { useNavigate } from "react-router-dom";
import Delete from "../Delete/Delete";
function MyPost ( props ){
    const navigate = useNavigate()
    const editPage = ()=>{
        navigate(`/posts/${props.id}`)
    } 
    const deletePost = ()=>{
        <Delete id={props.id} />
    }
    return(
        <form onSubmit={deletePost}>
            <h2>Title: {props.title}</h2>
            <h2>ID# {props.id}</h2>
            <h2>Description: {props.description}</h2>
            <h2>Price: {props.price}</h2>
            <button onClick={editPage}>Edit</button>
            <button type="submit">Delete</button>
        </form>
    )
}

export default MyPost;