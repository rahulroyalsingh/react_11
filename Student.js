function Student(props) {
    console.log(props.name)
    return (
        <div style={{ backgroundColor: "greenyellow", margin: 12 }}>
            <h1>Hello {props.name}</h1>
            
        </div>

    )
}
export default Student