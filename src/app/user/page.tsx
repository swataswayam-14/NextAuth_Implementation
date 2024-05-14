//server component : getServerSession is used to get the user details

import { getServerSession } from "next-auth";
import AppBar from "../../../components/page";

export default async function () {
    const session = await getServerSession()
    return <div>
        <AppBar/>
        User component
        {JSON.stringify(session)}
    </div>
    
}