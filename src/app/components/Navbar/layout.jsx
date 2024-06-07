import { BookCheck } from "lucide-react"

export default function Navbar() {
    return (
        <>
            <div className="flex justify-center space-x-2 p-10">
                <p>
                    <BookCheck
                        className="mt-1"
                    />
                </p>
                <p className="font-semibold text-2xl">
                    Todo App
                </p>
            </div>
        </>
    )
}
