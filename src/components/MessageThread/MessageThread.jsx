import { useNavigate } from "react-router-dom";
function MessageThread ( props ){
    const navigate = useNavigate()
    console.log(props)
    const messagePage = ()=>{
        navigate(`/posts`)
    } 
    return(
        <form onSubmit={messagePage}>
            <h2>{props.messages}</h2>
            <button type="submit">Back</button>   
        </form>
    )
}

export default MessageThread