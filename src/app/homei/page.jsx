import Link from "next/link";
import Authbtn from "../components/authbtn";

export default function Home() {
    return (
        <>
            home
            <Link href="/dashboard">
                <button className="ml-4">Go to dashboard</button>
            </Link>
            <Authbtn />
        </>
    )
}