import { useNavigate } from "react-router-dom";
function MyMessage ( props ) {
    return  <>
                <h2 key={props._id}>{props.fromUser.username} says {props.content} to {props.post.author.username} </h2>
            </>
    
}

export default MyMessage;