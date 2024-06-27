"use client";
import { useState} from "react";
import Link from "next/link";

export default function RegisterPage() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [creatingUser, setCreatingUser] = useState(false);
   const [userCreated, setUserCreated] = useState(false);
   async function handleFormSubmit(ev) {
      ev.preventDefault();
      setCreatingUser(true);
      await fetch('/api/register', {
         method: 'POST',
         body: JSON.stringify({email, password}),
         headers: {'content-Type': 'application/json'},
      });
      setCreatingUser(false);
      setUserCreated(true);
   }

   return (
      <section className="mt-8">
         <h1 className="text-center text-primary text-4xl mb-4">Register
         </h1>
         {userCreated && (
            <div className="my 4 text-center">
               User created.<br/>
                Now you can {''}
               <Link className="underline" href={'/login'} >Login &raquo;</Link>
            </div>
         )}
         <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
            <input type="email" placeholder="email" value={email} disabled={creatingUser}
             onChange={ev => setEmail(ev.target.value)} />
            <input type="password" placeholder="password" value={password} disabled={creatingUser}
            onChange={ev =>setPassword(ev.target.value)} />
            <button type="submit" disabled={creatingUser}>
              Register
            </button>
            <div className="my-4 text-center text-gray-500">
               or Login with provider
            </div>
            <button>Login with Gmail</button>
         </form>
      </section>
   );
}