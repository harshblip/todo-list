import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronRight, CircleCheck } from "lucide-react";
import { Ubuntu } from "next/font/google"

const rubik = Ubuntu({
    subsets: ["latin"],
    weight: '400',
});

export default function MainContent() {
    return (
        <>
            <div className="flex">
                <hr
                    className="border-gray-200 mt-3 w-12 ml-20 sm:ml-0"
                />
                <p className={`ml-2 text-lg -mt-[0.1rem] ${rubik.className}`}> Important </p>
                <hr
                    className="border-gray-200 mt-3 w-full ml-3 sm:mr-0 mr-12"
                />
            </div>
            <div className="bg-white/85 flex justify-between">
                <div className="flex">
                    <CircleCheck />
                    <p> fix UI bugs </p>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" > <ChevronRight /> </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <p> Edit </p>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    )
}