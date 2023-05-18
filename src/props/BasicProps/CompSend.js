import CompRecieve from "./CompRecieve";

function CompSend() {

    const x = 10;
    const y = 20;
    const name = "devendra"

    return (
        <>
            <CompRecieve x={x} name={name} a={y} />
        </>
    )
}

export default CompSend