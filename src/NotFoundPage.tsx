import { Link } from "react-router-dom";

export function Notfoundpage () {
    return (
        <>
            <h1>Not found page</h1>
            <Link to={'/'}>
                Go back home
            </Link>
        </>
    )
}