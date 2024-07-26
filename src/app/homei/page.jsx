"use client"

import Dashboard from "../../../pages/Dashboard";
import Door from "../door";
import { useState } from "react";

export default function Home({ session, status }) {
    const [show, setShow] = useState(false);
    return (
        !show ? <Door
            session={session}
            status={status}
            show={show}
            setShow={setShow}
        /> : <Dashboard
            session={session}
            status={status}
        />
    )
}