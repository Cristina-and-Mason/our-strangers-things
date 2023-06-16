function NewPost (props){
    async function newPostReq(event) {
        event.preventDefault();
        try {
            const response = await fetch("https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify ({
                    title: props.newPost
                })   
            })
            const translatedData = await response.json();
            console.log(translatedData)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <form onSubmit={newPostReq}>
            <label>New Post Title:</label>
            <input 
            title="title" 
            type="text" 
            placeholder="Your title goes here"
            value={props.newPostTitle}
            onChange={(event) => {
                props.setNewPostTitle(event.target.value)
                console.log(event.target.value)
            }}
            ></input><br/>
            <label>New Post Description:</label>
            <input 
            name="description" 
            type="text" 
            placeholder="Your description goes here"
            value={props.newPostDesc}
            onChange={(event) => {
                props.setNewPostDesc(event.target.value)
                console.log(event.target.value)
            }}
            ></input><br/>
            <button type="submit">Create New Post</button>
        </form>
    )
}

export default NewPost;