import React, { useState } from 'react'

function MultipleState() {

    const [cards, setCards] = useState([
        { id: 1, count: 0 },
        { id: 2, count: 0 }
    ])

    const handleIncrement = (id) => {
        setCards(
            cards.map((card) => {
                return card.id === id ? { ...card, count: card.count + 1 } : { ...card }
            })
        )
    }

    const handleDecrement = (id) => {
        setCards(
            cards.map((card) => {
                return card.id === id ? { ...card, count: card.count - 1 } : { ...card }
            })
        )
    }

    const total = cards.reduce((a, b) => a + b.count, 0)

    return (
        <div >
            {cards.map((card) => {
                return <div style={{ height: "400px", width: "400px", border: "2px solid black" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "400px" }}>
                        <div>{card.count}</div>
                        <button onClick={() => handleDecrement(card.id)}>-</button>
                        <button onClick={() => handleIncrement(card.id)}>+</button>
                    </div>
                </div>
            })}
            <div>Total {total}</div>

        </div>
    )
}

export default MultipleState