import * as React from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
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

    return (
        <div className={`grid items-start gap-4 p-1 ${className}`}>
            <div className="grid gap-2">
                <Label htmlFor="title" className={`mt-2 text-md`}>Title</Label>
                <Input
                    type="text"
                    id="title"
                    name="title"
                    className="border-gray-200"
                    value={tasks[index].title}
                    disabled
                />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="description" >Description</Label>
                <Input
                    type="text"
                    id="title"
                    name="title"
                    className="border-gray-200"
                    value={tasks[index].description}
                    disabled
                />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="tags">Tags</Label>
                <Input
                    type="text"
                    id="title"
                    name="title"
                    className="border-gray-200"
                    value={tasks[index].tags}
                    disabled
                />
            </div>
            <Button
                variant="outline"
                onClick={onClose}
            >Cancel</Button>
        </div>
    );
}

export default ProfileForm;
