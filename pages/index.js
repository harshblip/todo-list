import { getSession } from "next-auth/react";
import Home from "@/app/homei/page";

export async function getServerSideProps(context) {
    const session = await getSession(context);
    return {
        props: { session },
    };
}

export const metadata = {
    title: 'home.js',
    description: 'Generated by Next.js',
}

export default function index() {
    return (
        <>
            <Home />
        </>
    )
}