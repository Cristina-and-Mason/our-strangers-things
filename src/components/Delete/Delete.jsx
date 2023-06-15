function Delete (props){
    console.log(props)

    async function sendDeleteRequest(event){
        try{
            console.log(event.target.value)
            const response= await fetch(, {
                method: "DELETE"
            })

            const translatedData= await response.json();
            
            const filteredPosts= props.allPosts.filter((indivPost) => {
                if(indivPost._id != event.target.value){
                    return indivPost
                }
            })

            props.setAllPosts(filteredPosts)
        } catch (error){
            console.log(error);
        }
    }

    return(
        <div>
            <h2>Name: {props.posts.title}</h2>
            <p>Post Id: {props.posts._id}</p>
            <button
                onClick= {sendDeleteRequest}
                value={props.product._id}
            >
                Delete Product #{props.posts._id}
            </button>
        </div>
    )
}

export default Delete;