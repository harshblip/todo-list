'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronRight, CircleCheck, Edit2, Trash, Star, Eye } from "lucide-react";
import { Ubuntu } from "next/font/google"
import { useState } from "react";
import { EditTask } from "../EditTask";
import { AddTask } from "../AddTask";
import { Details } from "../Details";

const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: '400',
});

export default function MainContent() {

    const [open, setOpen] = useState(false);
    const [addo, setAddo] = useState(false);
    const [imp, setImp] = useState(false);
    const [detail, setDetail] = useState(false);
    const [index, setIndex] = useState(0);

    function toggleUpdate(i) {
        setIndex(i);
        setOpen(prevOpen => !prevOpen);
    }

    function toggleAdd() {
        setAddo(prevOpen => !prevOpen);
    }

    function detailCard(i) {
        setIndex(i);
        setDetail(prevDetail => !prevDetail);
    }

    const [impos, setImpos] = useState([]);
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "fix UI bugs",
            description: "fixing UI bugs for the efficient working of the app",
            category: "general",
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
            category: "important",
            status: "incompleted",
            tags: [
                "work", "school", "internship", "design"
            ],
            createdOn: "28/08/2024"
        },
        {
            id: 5,
            title: "call a friend for a party",
            description: "reminder to call a friend for the pending party",
            category: "general",
            status: "incompleted",
            tags: [
                "party", "friend", "relax"
            ],
            createdOn: "8/11/2024"
        },
        {
            id: 6,
            title: "take medicines",
            description: "take medicines prescribed by doc",
            category: "important",
            status: "incompleted",
            tags: [
                "health", "medicines"
            ],
            createdOn: "2/02/2024"
        },
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
        setImp(prevImp => !prevImp);
    }


    return (
        <>

            <div className="fixed bottom-0 mb-4 sm:ml-24 ml-4 z-10">
                <button className="btn p-2 w-[20rem]" onClick={toggleAdd}>
                    + Add a new task
                </button>
            </div>
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
                !impos.length ? <div className="mt-4 border flex justify-center p-2 rounded-lg bg-white/25">
                    <p className={`text-sm `}> no new tasks to show </p>
                </div> :
                    impos.map((x, i) => {
                        return (
                            <div key={x.id}>
                                <div className="rounded-lg mt-4" key={x.id}>
                                    <div className={`flex justify-between rounded-lg transition-all ${x.status === 'completed' ? `bg-white/35` : `bg-white/55`}`}>
                                        <div className="flex p-2 space-x-2 hover:cursor-pointer" onClick={() => handleToggle(x.id)}>
                                            {x.status === 'completed' ? <CircleCheck className="w-4" fill="black" color="white" /> : <CircleCheck className="w-4" />}
                                            <p className={`text-sm mt-[0.1rem] ${x.status === 'completed' ? `line-through` : ``}`}> {x.title} </p>
                                        </div>
                                        <div className="flex items-center" key={x.id}>
                                            <Star
                                                className="w-4 mr-4 hover:cursor-pointer"
                                                fill="gold"
                                                color="orange"
                                                onClick={() => handleImportance(x.id)}
                                            />
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <button className="w-8 mr-2 mt-[0.1rem] background-none"> <ChevronRight className="w-4" /> </button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent className="w-44 bg-white/85 sm:mr-32">
                                                    <DropdownMenuGroup>
                                                        <DropdownMenuItem
                                                            className="hover:bg-slate-200 hover:cursor-pointer"
                                                            onClick={() => toggleUpdate(i)}
                                                        >
                                                            <Edit2 className="w-3 mr-3" />
                                                            <span
                                                                className="text-xs font-bold"
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
                            </div>
                        )
                    })
            }

            <div className="flex mt-8">
                <hr
                    className="border-gray-200 mt-3 w-12"
                />
                <p className={`ml-2 text-lg -mt-[0.1rem] ${ubuntu.className}`}> General </p>
                <hr
                    className="border-gray-200 mt-3 w-full ml-3 sm:mr-0"
                />
            </div>

            {
                tasks.map((x, i) => {
                    if (x.category === 'general') {
                        return <div key={x.id}>
                            <div className="rounded-lg mt-4" key={x.id}>
                                <div
                                    className={`hover:p-[0.1rem] hover:cursor-pointer flex justify-between rounded-lg transition-all ${x.status === 'completed' ? `bg-white/35` : `bg-white/55`}`}
                                >
                                    <div className="flex p-2 space-x-2 hover:cursor-pointer" onClick={() => handleToggle(x.id)}>
                                        {x.status === 'completed' ? <CircleCheck className="w-4" fill="black" color="white" /> : <CircleCheck className="w-4" />}
                                        <p className={`text-sm mt-[0.1rem] ${x.status === 'completed' ? `line-through` : ``}`}> {x.title} </p>
                                    </div>
                                    <div className="flex items-center">
                                        <Star
                                            className="w-4 mr-4 hover:cursor-pointer"
                                            onClick={() => handleImportance(x.id)}
                                        />
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <button className="w-8 mr-2 mt-[0.1rem] background-none"> <ChevronRight className="w-4" /> </button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="w-44 bg-white/85 sm:mr-32">
                                                <DropdownMenuGroup>
                                                    <DropdownMenuItem
                                                        className="hover:bg-slate-200 hover:cursor-pointer"
                                                        onClick={() => toggleUpdate(i)}
                                                    >
                                                        <Edit2 className="w-3 mr-3" />
                                                        <span className="text-xs font-bold"> Edit task </span>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="hover:bg-slate-200">
                                                        <CircleCheck className="w-3 mr-3" />
                                                        <span className="text-xs font-bold"> Mark as completed </span>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        className="hover:bg-slate-200 hover:cursor-pointer"
                                                        onClick={() => detailCard(i)}
                                                    >
                                                        <Eye className="w-3 mr-3" />
                                                        <span
                                                            className="text-xs font-bold hover:cursor-pointer"
                                                        > Expand </span>
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
                        </div>
                    }
                })
            }
            <div className="invisible">
                <EditTask
                    isOpen={open}
                    onClose={toggleUpdate}
                    tasks={tasks}
                    setTasks={setTasks}
                    index={index}
                />
                <AddTask
                    isOpen={addo}
                    onClose={toggleAdd}
                    tasks={tasks}
                    setTasks={setTasks}
                />
                <Details
                    isOpen={detail}
                    onClose={detailCard}
                    tasks={tasks}
                    index={index}
                />
            </div>
            {console.log(open, detail)}
        </>
    )
}