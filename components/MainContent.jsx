'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronRight, CircleCheck, Edit2, Trash, Star, Eye } from "lucide-react";
import { Ubuntu } from "next/font/google"
import { useEffect, useState } from "react";
import { EditTask } from "./EditTask";
import { AddTask } from "./AddTask";
import { Details } from "./Details";
import axios from "axios";

const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: '400',
});

export default function MainContent({ memail }) {

    const [open, setOpen] = useState(false);
    const [addo, setAddo] = useState(false);
    const [imp, setImp] = useState(false);
    const [detail, setDetail] = useState(false);
    const [index, setIndex] = useState(0);
    const [tasks, setTasks] = useState([]);

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

    useEffect(() => {
        axios.get('/api/note', {
            params: { memail }
        }).then(
            (response) => {
                if (response.status === 200) {
                    setTasks(response.data);
                    console.log("mauj, data aagya")
                } else {
                    console.log("problem in /api/note")
                }
                // console.log(response)
            }
        ).catch(err => console.log(err))
    }, [])

    const form = {
        id: index,
        title: '',
        description: '',
        category: '',
        status: 'pending',
        tags: [],
    };

    // console.log(tasks)
    const klm = tasks.task || form;
    const gen = klm.length >= 2 ? klm.filter(x => x.category === 'general') : klm;
    const abc = tasks.task || form;
    const impos = abc.length >= 2 ? abc.filter(x => x.category === 'important') : abc;

    function handleToggle(i) {
        // write the completed not completed logic for the backend
    }

    function Delete(i) {
        // write delete route for backend
    }

    function handleImportance(i) {
        // change importance to backend
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
                    tasks.task.map((x, i) => {
                        return (
                            x.category === 'important' ?
                                <div key={i}>
                                    <div className="rounded-lg mt-4" key={i}>
                                        <div className={`flex justify-between rounded-lg transition-all ${x.status === 'completed' ? `bg-white/35` : `bg-white/55`}`}>
                                            <div className="flex p-2 space-x-2 hover:cursor-pointer" onClick={() => handleToggle(x.id)}>
                                                {x.status === 'completed' ? <CircleCheck className="w-4" fill="black" color="white" /> : <CircleCheck className="w-4" />}
                                                <p className={`text-sm mt-[0.1rem] ${x.status === 'completed' ? `line-through` : ``}`}> {x.title} </p>
                                            </div>
                                            <div className="flex items-center" key={i}>
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
                                </div> : ''
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
                !gen.length ? <div className="mt-4 border flex justify-center p-2 rounded-lg bg-white/25">
                    <p className={`text-sm `}> no new tasks to show </p>
                </div> :
                    tasks.task.map((x, i) => {
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
                    memail={memail}
                />
                <Details
                    isOpen={detail}
                    onClose={detailCard}
                    tasks={tasks}
                    index={index}
                />
            </div>
        </>
    )
}