//server component : getServerSession is used to get the user details

import { getServerSession } from "next-auth";
import AppBar from "../../../components/page";
import { NEXT_AUTH } from "@/lib/auth";

export default async function () {
    const session = await getServerSession(NEXT_AUTH)
    return <div>
        <AppBar/>
        User component
        {JSON.stringify(session)}
    </div>
    
}