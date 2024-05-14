"use client"

import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
export default function AppBar(){
    const router = useRouter()
    const session = useSession()
    return <div>
        {/* <button onClick={()=>{
            router.push('/api/auth/kjas/sadas')
        }}>Signin</button> */}

        <button onClick={()=>{
            signIn()
        }}>Signin</button>
        <button onClick={()=>{
            signOut()
        }}>
            Logout
        </button>
        {JSON.stringify(session)}
    </div>
}