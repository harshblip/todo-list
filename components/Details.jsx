"use client"
import * as React from "react"
import { useState, useEffect } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerContent,
} from "@/components/ui/drawer"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Button from "../src/app/Button"

export function Details({ isOpen, onClose, tasks, index }) {
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog open={isOpen} onClose={onClose}>
                <DialogContent className="sm:max-w-[425px]">
                    <ProfileForm
                        onClose={onClose}
                        tasks={tasks}
                        index={index}
                    />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={isOpen} onClose={onClose}>
            <DrawerContent>
                <ProfileForm
                    className="px-4"
                    onClose={onClose}
                    tasks={tasks}
                    index={index}
                />
            </DrawerContent>
        </Drawer>
    )
}

function ProfileForm({ tasks, index, className, onClose }) {

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

    function closeModal(e) {
        onClose();
    }

    return (
        <form className={`grid items-start gap-4 p-1 ${className}`}>
            <div className="grid gap-2">
                <Label htmlFor="title" className={`mt-2 text-md`}>Title</Label>
                <Input
                    type="text"
                    id="title"
                    name="title"
                    className="border-gray-200"
                    value={form.title}
                    disabled
                />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="description" className={`mt-2 text-md`} >Description</Label>
                <Input
                    type="text"
                    id="title"
                    name="title"
                    className="border-gray-200"
                    value={form.description}
                    disabled
                />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="tags" className={`mt-2 text-md`}>Tags</Label>
                <Input
                    type="text"
                    id="title"
                    name="title"
                    className="border-gray-200"
                    value={form.tags}
                    disabled
                />
            </div>
            <Button 
                click={closeModal}
                taip={"button"}
                text={"ok"}
            />
        </form>
    );
}

export default ProfileForm;
