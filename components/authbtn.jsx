'use client'

import { ArrowBigDown, RefreshCcw } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Dashboard from "../pages/Dashboard";

export default function authbtn({ session, status, show, setShow }) {
    const router = useRouter();

    if (status === "loading") {
        return (
            <div className="auth-btn">
                <div className="auth-info">
                    <RefreshCcw className="icon animate-spin" />
                </div>
            </div>
        );
    }

    useEffect(() => {
        if (status === 'authenticated') {
            setShow(true);
        } else {
            setShow(false);
        }
    }, [status, router]);

    console.log(status)

    return (
        !show ?
            <div className="auth-btn">
                {
                    status === 'authenticated' ? <><div className="auth-info pr-2">
                        <Image src={session.user.image} alt={session.user.name} width={30} height={30} className="rounded-full" />
                        <p>Hi, {session.user.name}</p>
                    </div>
                        <div className="dropdown">
                            <button className="dropdown-btn !py-1">
                                <ArrowBigDown className="icon" />
                            </button>
                            <ul className="dropdown-list opacity-0">
                                <li className="dropdown-item">
                                    <button onClick={() => signOut()} className="cta">
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div></> : <> <div className="auth-btn">
                            <button onClick={() => signIn()}>Login</button>
                        </div> </>
                }
            </div> :

            <div>
                <Dashboard
                    
                />
            </div>
    );
};
