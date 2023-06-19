import { useNavigate } from "react-router-dom";
function MyPost ( props ){
    const navigate = useNavigate()
    const editPage = ()=>{
        navigate(`/posts/${props.id}`)
    } 
    const deletePost = ()=>{
        navigate(`/delete/${props.id}`)
    }
    return(
        <form>
            <h2>Title: {props.title}</h2>
            <h2>ID# {props.id}</h2>
            <h2>Description: {props.description}</h2>
            <h2>Price: {props.price}</h2>
            <button onClick={editPage}>Edit</button>
            <button onClick={deletePost}>Delete</button>
        </form>
    )
}

export default MyPost;