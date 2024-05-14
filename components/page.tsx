"use client"

import { useRouter } from "next/navigation";
import { signIn, signOut } from "next-auth/react";
export default function AppBar(){
    const router = useRouter()
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
    </div>
}