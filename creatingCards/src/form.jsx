function handleform(events){
    events.preventDefault();
    console.log("Form has been Submitted!!");
}

export default function form(){
    return(
        <form onSubmit={handleform}>
            <input placeholder="Enter the text here.."></input>
            <button>Submit</button>
        </form>
    )
}