function SinglePost ( post ){
    return(
        <div>
            <h2>Title: {post.title}</h2>
            <h2>ID# {post.id}</h2>
            <h2>Description: {post.description}</h2>
        </div>
    )
}

export default SinglePost;