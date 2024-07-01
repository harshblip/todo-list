import * as React from "react"
import { useState, useEffect } from "react"

import Button from "../src/app/Button"
import { useMediaQuery } from "@/hooks/use-media-query"
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
        title: '',
        description: '',
        category: '',
        status: 'pending',
        tags: [],
    });

    useEffect(() => {
        if (tasks && tasks[index]) {
            setForm({
                id: index,
                title: tasks[index].title || '',
                description: tasks[index].description || '',
                category: tasks[index].category || '',
                status: 'pending',
                tags: tasks[index].tags || [],
            });
        }
    }, [tasks, index]);

    function dataChange(e) {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value,
        }));
    }

    console.log(index)

    function handleSubmit(e) {
        e.preventDefault();
        setTasks(prevTasks => {
            const newArr = [...prevTasks];
            newArr[form.id] = { ...newArr[form.id], ...form };
            return newArr;
        });
    }

    function closeModal() {
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
                    onChange={dataChange}
                    value={form.title}
                />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                    placeholder="Your description"
                    onChange={dataChange}
                    name="description"
                    value={form.description}
                />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="tags">Tags</Label>
                <Input id="tags" name="tags" onChange={dataChange} value={form.tags} />
            </div>
            <Button
                className={"bg-black text-white"}
                click={closeModal}
                taip={"submit"}
                text={"save changes"}
            />
            <Button
                click={closeModal}
                taip={"button"}
                text={"cancel"}
            />
        </form>
    );
}

export default ProfileForm;
