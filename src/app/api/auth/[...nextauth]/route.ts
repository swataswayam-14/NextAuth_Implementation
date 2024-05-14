import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import CredentialsProviders from "next-auth/providers/credentials";
import { NEXT_AUTH } from "@/lib/auth";

// export function GET(req:NextRequest, {params :{nextauth}}:any){
    
//     console.log(nextauth);
    
//     return NextResponse.json({
//         message:"hey Hi"
//     })
// }


const handler = NextAuth(NEXT_AUTH)

export {handler as GET, handler as POST}






//next auth helps you do session management , set cookies , jwts etc in the browser