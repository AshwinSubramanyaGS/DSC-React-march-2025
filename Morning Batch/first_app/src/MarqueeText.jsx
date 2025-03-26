
function MarqueeText({text ,direction}){
    return(
        <>
        <marquee direction={direction}>
                <h1>{text}</h1>
        </marquee>
        </>
    )
}
export default MarqueeText;