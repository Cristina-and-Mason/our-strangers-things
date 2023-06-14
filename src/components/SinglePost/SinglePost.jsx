function SinglePost ({ post }){
    return(
        <div>
            <h2>{post.allPosts.title}</h2>
            <h2>{post.allPosts.description}</h2>
        </div>
    )
}

export default SinglePost;