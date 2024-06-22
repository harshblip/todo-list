import * as React from "react"
import { useState } from "react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function EditTask({ isOpen, onClose, tasks, setTasks, index }) {
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog open={isOpen} onClose={onClose}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit task</DialogTitle>
                        <DialogDescription>
                            Edit task here. Click save when you're done
                        </DialogDescription>
                    </DialogHeader>
                    <ProfileForm
                        onClose={onClose}
                        tasks={tasks}
                        setTasks={setTasks}
                        index={index}
                    />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={isOpen} onClose={onClose}>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Edit task</DrawerTitle>
                    <DrawerDescription>
                        Edit task here. Click save when you're done
                    </DrawerDescription>
                </DrawerHeader>
                <ProfileForm
                    className="px-4"
                    onClose={onClose}
                    tasks={tasks}
                    setTasks={setTasks}
                    index={index}
                />
            </DrawerContent>
        </Drawer>
    )
}

function ProfileForm({ tasks, index, setTasks, className, onClose }) {
    const [form, setForm] = useState({
        id: index,
        title: tasks[index].title || '',
        description: tasks[index].description || '',
        category: tasks[index].category || '',
        status: 'pending',
        tags: tasks[index].tags || [],
    });

    const [toggle, setToggle] = useState(tasks[index].category === 'important');

    function datachange(e) {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value,
        }));
    }

    function handleToggle(e) {
        e.preventDefault();
        const newCategory = !toggle ? 'important' : 'general';
        setToggle(!toggle);
        setForm(prevForm => ({
            ...prevForm,
            category: newCategory,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setTasks(prevTasks => {
            const newArr = [...prevTasks];
            newArr[index] = { ...newArr[index], ...form };
            return newArr;
        });
        onClose();
    }

    return (
        <form className={`grid items-start gap-4 ${className}`} onSubmit={handleSubmit}>
            <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                    type="text"
                    id="title"
                    name="title"
                    onChange={datachange}
                    value={form.title}
                />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                    placeholder="Your description"
                    onChange={datachange}
                    name="description"
                    value={form.description}
                />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <div className="flex space-x-4">
                    <div
                        className={`flex justify-center items-center space-x-2 p-1 rounded-md text-xs w-24 transition-all font-semibold hover:cursor-pointer ${toggle ? `bg-red-100 hover:bg-red-300` : 'bg-red-300'
                            }`}
                        onClick={handleToggle}
                    >
                        <svg height="8" width="8">
                            <circle r="4" cx="4" cy="4" fill="red" />
                        </svg>
                        <button type="button">Important</button>
                    </div>
                    <div
                        className={`flex justify-center items-center space-x-2 p-1 rounded-md text-xs w-24 transition-all font-semibold hover:cursor-pointer ${!toggle ? `bg-green-100 hover:bg-green-300` : 'bg-green-300'
                            }`}
                        onClick={handleToggle}
                    >
                        <svg height="8" width="8">
                            <circle r="4" cx="4" cy="4" fill="green" />
                        </svg>
                        <button type="button">General</button>
                    </div>
                </div>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="tags">Tags</Label>
                <Input id="tags" name="tags" onChange={datachange} value={form.tags} />
            </div>
            <Button className="bg-black text-white" type="submit">Save changes</Button>
            <Button variant="outline" onClick={onClose} type="button">Cancel</Button>
        </form>
    );
}

export default ProfileForm;
