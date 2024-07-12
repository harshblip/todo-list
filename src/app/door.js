import Link from "next/link";
import Authbtn from "../../components/authbtn";

export default function Door({ session, status, show, setShow }) {
    return (
        <>
            home
            <Link href="/dashboard">
                <button className="ml-4">Go to dashboard</button>
            </Link>
            <Authbtn
                session={session}
                status={status}
                show={show}
                setShow={setShow}
            />
        </>
    )
}