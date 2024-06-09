import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronRight, CircleCheck, Edit2, Trash, Star } from "lucide-react";
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
                    className="border-gray-200 mt-3 w-12"
                />
                <p className={`ml-2 text-lg -mt-[0.1rem] ${rubik.className}`}> Important </p>
                <hr
                    className="border-gray-200 mt-3 w-full ml-3 sm:mr-0 mr-12"
                />
            </div>
            <div className="rounded-lg mt-4">
                <div className="bg-white/55 flex justify-between rounded-lg">
                    <div className="flex p-2 space-x-2">
                        <CircleCheck className="w-4" />
                        <p className="text-sm mt-[0.1rem]"> fix UI bugs </p>
                    </div>
                    <div className="flex items-center">
                        <Star className="w-4 mr-4" />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="w-8 mr-2 mt-[0.1rem] background-none"> <ChevronRight className="w-4" /> </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-44 bg-white/85 sm:mr-32">
                                <DropdownMenuGroup>
                                    <DropdownMenuItem className="hover:bg-slate-200">
                                        <Edit2 className="w-3 mr-3" />
                                        <span className="text-xs font-bold"> Edit task </span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-slate-200">
                                        <CircleCheck className="w-3 mr-3" />
                                        <span className="text-xs font-bold"> Mark as completed </span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-slate-200">
                                        <Star className="w-3 mr-3" />
                                        <span className="text-xs font-bold"> Mark as important </span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-red-300 rounded-lg">
                                        <Trash className="w-3 mr-3" color="red" />
                                        <span className="text-xs font-bold"> Delete </span>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
            <div className="rounded-lg mt-4">
                <div className="bg-white/35 flex justify-between rounded-lg">
                    <div className="flex p-2 space-x-2">
                        <CircleCheck className="w-4" fill="black" color="white" />
                        <p className="line-through text-sm mt-[0.1rem]">  study for english mock exams </p>
                    </div>
                    <div className="flex items-center">
                        <Star className="w-4 mr-4" />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="w-8 mr-2 mt-[0.1rem] background-none"> <ChevronRight className="w-4" /> </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-44 bg-white/85 sm:mr-32">
                                <DropdownMenuGroup>
                                    <DropdownMenuItem className="hover:bg-slate-200">
                                        <Edit2 className="w-3 mr-3" />
                                        <span className="text-xs font-bold"> Edit task </span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-slate-200">
                                        <CircleCheck className="w-3 mr-3" />
                                        <span className="text-xs font-bold"> Mark as completed </span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-slate-200">
                                        <Star className="w-3 mr-3" />
                                        <span className="text-xs font-bold"> Mark as important </span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-red-300 rounded-lg">
                                        <Trash className="w-3 mr-3" color="red" />
                                        <span className="text-xs font-bold"> Delete </span>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
            <div className="flex mt-8">
                <hr
                    className="border-gray-200 mt-3 w-12"
                />
                <p className={`ml-2 text-lg -mt-[0.1rem] ${rubik.className}`}> All Tasks </p>
                <hr
                    className="border-gray-200 mt-3 w-[12rem] sm:w-[19.3rem] ml-3 sm:mr-0"
                />
            </div>
            <div className="rounded-lg mt-4">
                <div className="bg-white/55 flex justify-between rounded-lg     ">
                    <div className="flex p-2 space-x-2">
                        <CircleCheck className="w-4" />
                        <p className="text-sm mt-[0.1rem]"> finish french essays </p>
                    </div>
                    <div className="flex items-center">
                        <Star className="w-4 mr-4" />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="w-8 mr-2 mt-[0.1rem] background-none"> <ChevronRight className="w-4" /> </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-44 bg-white/85 sm:mr-32">
                                <DropdownMenuGroup>
                                    <DropdownMenuItem className="hover:bg-slate-200">
                                        <Edit2 className="w-3 mr-3" />
                                        <span className="text-xs font-bold"> Edit task </span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-slate-200">
                                        <CircleCheck className="w-3 mr-3" />
                                        <span className="text-xs font-bold"> Mark as completed </span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-slate-200">
                                        <Star className="w-3 mr-3" />
                                        <span className="text-xs font-bold"> Mark as important </span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-red-300 rounded-lg">
                                        <Trash className="w-3 mr-3" color="red" />
                                        <span className="text-xs font-bold"> Delete </span>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
            <div className="rounded-lg mt-4">
                <div className="bg-white/55 flex justify-between rounded-lg     ">
                    <div className="flex p-2 space-x-2">
                        <CircleCheck className="w-4" />
                        <p className="text-sm mt-[0.1rem]"> respond to feedback on design mocks </p>
                    </div>
                    <div className="flex items-center">
                        <Star className="w-4 mr-4" />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="w-8 mr-2 mt-[0.1rem] background-none"> <ChevronRight className="w-4" /> </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-44 bg-white/85 sm:mr-32">
                                <DropdownMenuGroup>
                                    <DropdownMenuItem className="hover:bg-slate-200">
                                        <Edit2 className="w-3 mr-3" />
                                        <span className="text-xs font-bold"> Edit task </span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-slate-200">
                                        <CircleCheck className="w-3 mr-3" />
                                        <span className="text-xs font-bold"> Mark as completed </span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-slate-200">
                                        <Star className="w-3 mr-3" />
                                        <span className="text-xs font-bold"> Mark as important </span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-red-300 rounded-lg">
                                        <Trash className="w-3 mr-3" color="red" />
                                        <span className="text-xs font-bold"> Delete </span>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </>
    )
}