import { addNote } from "../../prisma/notecomm";
import { deleteNote } from "../../prisma/notecomm";
import { updateNote } from "../../prisma/notecomm";
import { getNote } from "../../prisma/notecomm";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { body } = req;
        // console.log("helo", body);
        try {
            await addNote(body);
            res.status(201).json('a new note is added successfully');
        } catch (err) {
            console.log('error adding new note ', err);
            res.status(400).json('Error adding a new note. Please try again.')
        }
    }
    if (req.method === 'GET') {
        const { memail } = req.query;
        try {
            const task = await getNote(memail);
            res.status(200).json({ task });
        } catch (err) {
            console.log('error getting the note ', err);
            res.status(400).json('Error getting the note. Please try again.')
        }
    }
    if (req.method === 'DELETE') {
        const { body } = req;
        try {
            await deleteNote(body.id);
            res.status(200).json(`${body.title} was deleted successfully`)
        } catch (err) {
            console.log(`error deleting the note`, err);
            res.status(400).json(`Faced an error deleting ${body.title}. Please try again.`)
        }
    }
    if(req.method === 'PUT') {
        const { body } = req;
        try {
            await updateNote(body);
            res.status(200).json('the note was updated');
        } catch (err) {
            console.log("error updating the contents: ", err);
            res.status(400).json("error updating the contents of the note")
        }
    }
}
