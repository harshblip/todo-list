import { ArrowBigDown, RefreshCcw } from "lucide-react";
import { signIn, signOut } from "next-auth/react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
const authbtn = () => {
    const { data: session, status } = getServerSession();
    if (status === "loading") {
        return (
            <div className="auth-btn">
                <div className="auth-info">
                    <RefreshCcw className="icon animate-spin" />
                </div>
            </div>
        );
    }
    if (status === "authenticated") {
        redirect('/MainContent')
    }

    console.log(status)

    return (
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
        </div>
    );
};
export default authbtn;