"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronRight, CircleCheck, Edit2, Trash, Star } from "lucide-react";
import { Ubuntu } from "next/font/google"
import { useState } from "react";
import { EditTask } from "../EditTask";

const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: '400',
});

export default function MainContent() {

    const [open, setOpen] = useState(false);

    function toggleDrawer() {
        setOpen(prevOpen => !prevOpen);
    }
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "fix UI bugs",
            description: "fixing UI bugs for the efficient working of the app",
            category: "important",
            status: "incompleted",
            tags: [
                "work", "job", "cs"
            ],
            createdOn: "19/06/2024"
        },
        {
            id: 2,
            title: "study for english mock exams",
            description: "have to study for english mock exams at school",
            category: "important",
            status: "completed",
            tags: [
                "work", "school", "education", "english"
            ],
            createdOn: "24/02/2024"
        },
        {
            id: 3,
            title: "finish french essays",
            description: "finish french essay homework",
            category: "general",
            status: "incompleted",
            tags: [
                "work", "school", "education", "french"
            ],
            createdOn: "14/07/2024"
        },
        {
            id: 4,
            title: "respond to feedback on design mocks",
            description: "have to respond on some design mocks i made for the new product app",
            category: "general",
            status: "incompleted",
            tags: [
                "work", "school", "internship", "design"
            ],
            createdOn: "28/08/2024"
        },
        {
            id: 5,
            title: "respond to feedback on design mocks",
            description: "have to respond on some design mocks i made for the new product app",
            category: "important",
            status: "incompleted",
            tags: [
                "work", "school", "internship", "design"
            ],
            createdOn: "28/08/2024"
        }
    ])

    function handleToggle(i) {
        setTasks(prevTasks =>
            prevTasks.map(x => x.id === i ? {
                ...x,
                status: x.status === "completed" ? "incompleted" : "completed"
            } : x))
    }

    function Delete(i) {
        setTasks(prevTasks => prevTasks.filter(x => x.id !== i));
    }

    function handleImportance(i) {
        setTasks(prevTasks =>
            prevTasks.map(x => x.id === i ? {
                ...prevTasks,
                category: x.category === "important" ? "general" : "important"
            } : x)
        )
    }

    return (
        <>
            <div className="flex">
                <hr
                    className="border-gray-200 mt-3 w-12"
                />
                <p className={`ml-2 text-lg -mt-[0.1rem] ${ubuntu.className}`}> Important </p>
                <hr
                    className="border-gray-200 mt-3 w-full ml-3 sm:mr-0 mr-12"
                />
            </div>

            {
                tasks.map((x, i) => {
                    if (x.category === 'important') {
                        return <>
                            <div className="rounded-lg mt-4">
                                <div className={`flex justify-between rounded-lg transition-all ${x.status === 'completed' ? `bg-white/35` : `bg-white/55`}`}>
                                    <div className="flex p-2 space-x-2 hover:cursor-pointer" onClick={() => handleToggle(x.id)}>
                                        {x.status === 'completed' ? <CircleCheck className="w-4" fill="black" color="white" /> : <CircleCheck className="w-4" />}
                                        <p className={`text-sm mt-[0.1rem] ${x.status === 'completed' ? `line-through` : ``}`}> {x.title} </p>
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
                                                        <span
                                                            className="text-xs font-bold"
                                                            onClick={toggleDrawer}
                                                        > Edit task </span>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="hover:bg-slate-200">
                                                        <CircleCheck className="w-3 mr-3" />
                                                        <span className="text-xs font-bold"> Mark as completed </span>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="hover:bg-slate-200">
                                                        <Star className="w-3 mr-3" />
                                                        <span
                                                            className="text-xs font-bold hover:cursor-pointer"
                                                            onClick={() => handleImportance(x.id)}
                                                        > Mark as important </span>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="hover:bg-red-300 rounded-lg">
                                                        <Trash className="w-3 mr-3" color="red" />
                                                        <span
                                                            className="text-xs font-bold"
                                                            onClick={() => Delete(x.id)}
                                                        > Delete </span>
                                                    </DropdownMenuItem>
                                                </DropdownMenuGroup>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                })
            }

            <div className="flex mt-8">
                <hr
                    className="border-gray-200 mt-3 w-12"
                />
                <p className={`ml-2 text-lg -mt-[0.1rem] ${ubuntu.className}`}> All Tasks </p>
                <hr
                    className="border-gray-200 mt-3 w-[12rem] sm:w-[19.3rem] ml-3 sm:mr-0"
                />
            </div>

            {
                tasks.map((x, i) => {
                    if (x.category === 'general') {
                        return <>
                            <div className="rounded-lg mt-4" key={x.id}>
                                <div className={`flex justify-between rounded-lg transition-all ${x.status === 'completed' ? `bg-white/35` : `bg-white/55`}`}>
                                    <div className="flex p-2 space-x-2 hover:cursor-pointer" onClick={() => handleToggle(x.id)}>
                                        {x.status === 'completed' ? <CircleCheck className="w-4" fill="black" color="white" /> : <CircleCheck className="w-4" />}
                                        <p className={`text-sm mt-[0.1rem] ${x.status === 'completed' ? `line-through` : ``}`}> {x.title} </p>
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
                                                        <span
                                                            className="text-xs font-bold hover:cursor-pointer"
                                                            onClick={() => handleImportance(x.id)}
                                                        > Mark as important </span>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="hover:bg-red-300 rounded-lg">
                                                        <Trash className="w-3 mr-3" color="red" />
                                                        <span
                                                            className="text-xs font-bold"
                                                            onClick={() => Delete(x.id)}
                                                        > Delete </span>
                                                    </DropdownMenuItem>
                                                </DropdownMenuGroup>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                })
            }
            <div className="invisible">
                <EditTask isOpen={open} onClose={toggleDrawer} />
            </div>
        </>
    )
}