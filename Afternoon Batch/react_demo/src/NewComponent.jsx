import NavBar from "./header/NavBar";

function NewComponent(){
    return(
        <>
            <NavBar pageNo="1" />
            <input type="text" name="test" id="test" placeholder="This is an empty design" />
        </>
    )
}

export default NewComponent;