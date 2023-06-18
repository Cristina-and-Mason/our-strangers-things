import { useParams } from "react-router-dom";


function PostDetails (props) {
    const { id } = useParams();
    console.log(id)
    const clickedOnPost = props.allPosts.filter((singlePost) => {
        if (singlePost._id == id) {
            console.log(singlePost)
            return singlePost   
        }
    })
    return (
        <>
            <h2></h2>
        </>
    )
}


export default PostDetails