import { useEffect, useState } from "react"
import type { users } from "./globalInterfaces.ts";
import { Link } from "react-router-dom";

function useUsers () {
    const [data, setData] = useState<users[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                setData(json)
            });
    }, [])

    return { data }
}

function useOneUser(id: number) {
    const [user, setUser] = useState<users[]>([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((json) => {
                setUser(json)
            });
    }, [id])

    return { user }
}

export function Dashboard() {

    const items = [
        {id: 1, title: "My profile"},
        {id: 2, title: "My project"},
        {id: 3, title: "My teams"}
    ]

    return (
        <>
            <h1>Dashboard Page</h1>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>
                            <Link to={`/dashboard/${item.id}`}>
                                <h2>{item.title}</h2>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )

    /*
    const [id, setId] = useState<number>(0)

    const { data } = useUsers()
    const { user } = useOneUser(id)

    const dataLength = data?.length > 0

    return (
        <>
            <h1>Dashboard</h1>
            <h3>List of users</h3>
            <ul>
                {
                    dataLength
                    ? data.map(register => (
                        <li key={register.id}>
                            <Link to={`/dashboard/${register.id}`} onClick={()=>setId(register.id)}>
                                No. user: {register.id}
                            </Link>
                        </li>
                    ))
                    : <p>There's no users</p>
                }
            </ul>
        </>
    )
    */
}