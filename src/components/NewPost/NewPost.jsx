function NewPost (props){
    // console.log(props)
    return(
        <form onSubmit={(event) =>{
            event.preventDefault();
        }}>
            <label>New Post Title:</label>
            <input 
            title="title" 
            type="text" 
            placeholder="Your title goes here"
            value={props.newPost}
            onChange={(event) => {
                props.setNewPost(event.target.value)
                console.log(event.target.value)
            }}
            ></input><br/>
            <label>New Post Description:</label>
            <input name="description" type="text" placeholder="Your description goes here"></input><br/>
            <button type="submit">Create New Post</button>
        </form>
    )
}

export default NewPost;