
import * as React from "react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function AddTask({ isOpen, onClose, form, setForm }) {
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog open={isOpen} onClose={onClose}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit task</DialogTitle>
                        <DialogDescription>
                            Add a new task here. Click save when you're done
                        </DialogDescription>
                    </DialogHeader>
                    <ProfileForm
                        onClose={onClose}
                        form={form}
                        setForm={setForm}
                    />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={isOpen} onClose={onClose}>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Add a new task</DrawerTitle>
                    <DrawerDescription>
                        Add a new task here. Click save when you're done
                    </DrawerDescription>
                </DrawerHeader>
                <ProfileForm className="px-4" />
            </DrawerContent>
        </Drawer>
    )
}

function ProfileForm({ className, form, setForm, onClose }) {
    function dataPush(e) {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }))
    }

    const [toggle, setToggle] = React.useState(false);

    function handleToggle() {
        setToggle(prevToggle => !prevToggle);
        setForm(prevForm => ({
            ...prevForm,
            category: toggle === false ? "general" : "important"
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <form className={cn("grid items-start gap-4", className)} onSubmit={handleSubmit}>
            <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input type="text" id="title" name="title" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea placeholder="Your description" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <div className="flex space-x-4">
                    <div className={`flex justify-center items-center space-x-2 p-1 rounded-md text-xs w-24 transition-all font-semibold hover:cursor-pointer ${toggle ? `bg-red-100 hover:bg-red-300` : 'bg-red-300'}`} onClick={handleToggle}>
                        <svg height="8" width="8">
                            <circle r="4" cx="4" cy="4" fill="red" />
                        </svg>
                        <button> important </button>
                    </div>
                    <div className={`flex justify-center items-center space-x-2 p-1 rounded-md text-xs w-24 transition-all font-semibold hover:cursor-pointer ${!toggle ? `bg-green-100 hover:bg-green-300` : 'bg-green-300'}`} onClick={handleToggle}>
                        <svg height="8" width="8">
                            <circle r="4" cx="4" cy="4" fill="green" />
                        </svg>
                        <button> general </button>
                    </div>
                </div>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="tags">Tags</Label>
                <Input id="text" name="tags" />
            </div>
            <Button className="bg-black text-white" onClick={onClose}>Save changes</Button>
            <Button variant="outline" onClick={onClose}>Cancel</Button>
        </form>
    )
}
