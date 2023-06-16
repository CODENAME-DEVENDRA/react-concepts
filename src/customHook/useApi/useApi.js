import { useEffect, useState } from "react"

export function useApi(url) {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true)
            try {

                const response = await fetch(url)
                const json = await response.json()
                setData(json)
                setError(null)

            } catch (error) {
                console.log(error.message);
                setError(error.message)
                setData(null)

            } finally {
                setIsLoading(false)
            }

        }

        fetchData()

    }, [url])

    return { data, isLoading, error }

}