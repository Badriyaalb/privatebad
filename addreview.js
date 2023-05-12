
function Addreview(){

    return(
        <>
            <Header/>
            <h1 id="addreview"> Add Your Review</h1>
            <textarea id="addname" placeholder="Name"/>
            <textarea id="textbox"></textarea>
            <br/>
            <button onclick="()">Submit</button>
            <Footer/>
        </>
    )
}
export default Addreview();