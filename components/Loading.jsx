import { ThreeBounce } from "better-react-spinkit"

function Loading() {
    return (
        <center style={{ display: "grid", placeItems: "center", height: "100vh"}}>
            <div style={{ display: "flex", flexDirection: "column"}}>
                <img
                src="https://i.imgur.com/7mGQQ9g.png"
                alt="MadChat Logo"
                style={{ marginBottom: 10 }}
                height={150}
                />
                <ThreeBounce color="#ff7373" size={30}/>
            </div>
        </center>
    )
}

export default Loading
