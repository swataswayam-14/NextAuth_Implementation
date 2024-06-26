import CredentialsProviders from "next-auth/providers/credentials";
export const NEXT_AUTH = {
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
                        id:'user1',
                        name:"swata swayam",
                        email:"swatasawdajbd@gmail.com"
                    }
                }
            })
        ],
        secret: process.env.NEXTAUTH_SECRET,
        callbacks:{
            signIn:({user}:any)=>{
                if(user.email == "thatmaliciousemail@gmail.com"){
                    return false
                }
                return true
            },
            jwt:async ({token , user}:any) =>{
                if(user){
                    token.id = user.id
                }
                console.log(token);
                
                return token;
            },
            session:({session, token, user}:any)=>{
                if(session && session.user){
                    session.user.id = token.id; //or token.sub
                }
                console.log(session);
                
                return session;
            }
        }
}