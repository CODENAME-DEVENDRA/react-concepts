//method 1

// function CompRecieve(props) {
//     console.log(props);

//     return (
//         <div>
//             <h1>CompRecieve component</h1>
//             <p>{props.x}</p>
//             <p>{props.name}</p>
//             <p>{props.a}</p>
//         </div>
//     )
// }

// export default CompRecieve;

//method 2

function CompRecieve({ x, name, a }) {
    return (
        <div>
            <h1>CompRecieve</h1>
            <p>{x}</p>
            <p>{name}</p>
            <p>{a}</p>
        </div>
    )
}

export default CompRecieve