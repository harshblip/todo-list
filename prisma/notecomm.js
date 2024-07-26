import prisma from "./prisma";

export async function addNote(body) {
    const { form, memail } = body;
    const {
        title,
        description,
        category,
        status,
        tags,
        createdOn,
        updatedOn,
    } = form;

    console.log("hi", title);

    await prisma.note.create({
        data: {
            title,
            description,
            category,
            status,
            tags,
            createdOn,
            updatedOn,
            gmail: memail,
            user: {
                connect: {
                    email: memail
                }
            }
        }
    })
}

export async function deleteNote(body) {

}

export async function updateNote(body) {
    const { form } = body;
    const {
        title,
        description,
        category,
        status,
        tags,
        updatedOn,
        dbId
    } = form;
    console.log(dbId);
    await prisma.note.update({
        where: {
            id: dbId
        },
        data: {

        }
    })
}

export async function getNote(body) {
    const note = await prisma.note.findMany({
        where: {
            gmail: body
        },
    })
    return note
}
