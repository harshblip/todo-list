import { Button } from "@/components/ui/button"
import { BookCheck, ArrowBigRightDash } from "lucide-react"
import { signIn, signOut } from "next-auth/react"

export default function Navbar() {
    return (
        <>
            <div className="flex justify-center space-x-2 p-10 -mt-[20rem] sm:-mt-[8rem]">
                <p>
                    <BookCheck
                        className="mt-1"
                    />
                </p>
                <p className="font-semibold text-2xl">
                    Todo App
                </p>
                <Button
                    variant="outline"
                    size="icon"
                    className="w-6 h-6 mt-2"
                    onClick={() => signOut()}
                >
                    <ArrowBigRightDash className="h-4 w-4" />
                </Button>
            </div>
        </>
    )
}
