import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import CredentialsProviders from "next-auth/providers/credentials";

// export function GET(req:NextRequest, {params :{nextauth}}:any){
    
//     console.log(nextauth);
    
//     return NextResponse.json({
//         message:"hey Hi"
//     })
// }


const handler = NextAuth({
    providers:[
        CredentialsProviders({
            name:"Email",
            credentials:{
                username:{label:'Username', type:'text', placeholder:'Email'},
                password:{label:'password', type:'password', placeholder:'Password'},
            },
            async authorize(credentials:any){
                return{
                    id:'user1'
                }
            }
        })
    ]
})

export const GET = handler
//export const POST = handler






//next auth helps you do session management , set cookies , jwts etc in the browser