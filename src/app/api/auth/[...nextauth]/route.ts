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

                const username = credentials.username;
                const password = credentials.password;
                //make a database call to create the user

                return{
                    id:'user1'
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
        signIn:({user})=>{
            if(user.email == "thatmaliciousemail@gmail.com"){
                return false
            }
            return true
        }
    }
})

export {handler as GET, handler as POST}






//next auth helps you do session management , set cookies , jwts etc in the browser