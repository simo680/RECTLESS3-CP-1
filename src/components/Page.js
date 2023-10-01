

function Page(props) {
    
    let {background, title, text} = props
    return (
    <div>
        <div style={{background}}>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    </div>
    )
}



export default Page