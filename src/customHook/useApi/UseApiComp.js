import React from 'react'
import { useApi } from './useApi'
import { RotatingLines } from "react-loader-spinner"

function UseApiComp() {

    const URL = "https://jsonplaceholder.typicode.com/users"

    const { data, isLoading, error } = useApi(URL)

    return (
        <div>

            {isLoading &&
                <div>
                    <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={true}
                    />
                </div>
            }

            {data?.map((user, i) => {
                return <p key={i}>{user.name}</p>
            })}

            {error && <h1>{error}</h1>}

        </div>
    )
}

export default UseApiComp