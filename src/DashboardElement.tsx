import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import type { users } from './globalInterfaces';

function useOneUser(id: string | undefined) {
    const [user, setUser] = useState<users | null>(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((json) => {
                setUser(json)
            });
    }, [id])

    return { user }
}

export function DashboardElement () {

    const { id } = useParams<{ id: string }>()
    const { user } = useOneUser(id)

    return (
        <>
            <h1>Data user</h1>
            {
                <li>
                    {user?.userId}
                    {user?.id}
                    {user?.title}
                    {user?.body}
                </li>
            }
        </>
    )
}