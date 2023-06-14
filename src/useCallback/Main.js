import React, { useCallback, useState } from 'react'
import Header from './components/Header'
import Counter from './components/Counter'
import Button from './components/Button'

function Main() {

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    // const handleIncrementCount1 = () => {
    //     setCount1(count1 + 1)
    // }

    // const handleIncrementCount2 = () => {
    //     setCount2(count2 + 100)
    // }

    const handleIncrementCount1 = useCallback(() => {
        setCount1(count1 + 1)
    }, [count1])

    const handleIncrementCount2 = useCallback(() => {
        setCount2(count2 + 1)
    }, [count2])


    console.log(handleIncrementCount1);

    return (
        <>
            <Header />

            <Counter title={"Count1"} count={count1} />
            <Button clickFunction={handleIncrementCount1}>Count1 Button</Button>

            <Counter title={"Count2"} count={count2} />
            <Button clickFunction={handleIncrementCount2}>Count2 Button</Button>

        </>
    )
}

export default Main

//memoize function