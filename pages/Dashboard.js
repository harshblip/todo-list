import '../src/app/globals.css'
import Navbar from "../components/Navbar/layout"
import MainContent from "../components/MainContent"

export default function Dashboard({ session, status }) {
    return (
        <div className="flex justify-center items-center bg">
            <div className="flex flex-col w-[32rem]">
                <div className="sm:w-[32rem] container min-w-0 p-4">
                    <Navbar />
                    {
                        session ? <MainContent
                            memail={session.user.email}
                        /> : 'user session not found'
                    }
                </div>
            </div>
        </div>
    )
}