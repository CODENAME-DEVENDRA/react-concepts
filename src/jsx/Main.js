import React from 'react'

function Main() {

    const x = 10;
    const y = 20;
    const name = "devendra"
    const tag = <h1>Hello World</h1>

    function greet(x) {
        return `Hi ${x}`
    }

    const newGreet = function (x) {
        return `Hi ${x}`
    }

    const url = "https://picsum.photos/id/237/200/300"

    const items = ["item1", "item2", "item3"]

    const mapped = items.map((item) => {
        return <li>{item}</li>
    })

    console.log(mapped);

    const styles = { width: "250px", height: "150px", backgroundColor: "green" }

    return (
        <div>
            <div>{x + y}</div>
            <div>{name}</div>
            <div>{tag}</div>
            <div>{greet("Good Morning !")}</div>
            <div>{newGreet("Bye")}</div>
            <div> <img src={url} /></div>

            <div>
                <ol>
                    {items.map((item) => {
                        return <li>{item}</li>
                    })}
                </ol>
            </div>

            <div>
                <ul>
                    {mapped}
                </ul>
            </div>

            <div style={{ width: "250px", height: "150px", backgroundColor: "red" }}>

            </div>
            <div style={styles}>

            </div>

        </div>
    )
}

export default Main