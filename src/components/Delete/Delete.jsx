function Delete (props) {
    const TOKEN_STRING = localStorage.getItem ("token");
    async function sendDeleteRequest (event) {
        event.preventDefault ();
        try{
            
            const response= await fetch(`https://strangers-things.herokuapp.com/api/2304-FTB-ET-WEB-FT/posts/${props.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${TOKEN_STRING}`
                }
            })
            const translatedData= await response.json();
            console.log(translatedData)
            return translatedData
            } catch (error){
            console.log(error);
        }
    }
}
export default Delete