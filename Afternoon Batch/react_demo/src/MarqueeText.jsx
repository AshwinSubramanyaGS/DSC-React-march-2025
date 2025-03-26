import NavBar from "./header/NavBar"

function MarqueeText({direction,text}){
    return(
        <>
            <NavBar pageNo="2" />
            <marquee direction={direction}><h1>{text}</h1></marquee>
        </>
    )
}

export default MarqueeText