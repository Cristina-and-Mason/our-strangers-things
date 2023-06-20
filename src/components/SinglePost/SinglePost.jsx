function SinglePost ( props ){
    return(
            <form>
            <h2>Title: {props.title}</h2>
            <h2>ID# {props.id}</h2>
            <h2>Description: {props.description}</h2>
            <h2>Author: {props.author.username}</h2>
            <h2>Price: {props.price}</h2>
            </form> 
    )
}

export default SinglePost;


