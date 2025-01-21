import React from 'react'
import type { Metadata } from "next";
import getUsers from '@/lib/getUsers';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Users Page",
  description: "Users page",
};

const Userspage = async () => {
  const userData: Promise<User[]> = getUsers();
  const users = await userData;

  console.log(`Hello ${users}`);

  const content = (
    <section>
      <h2>
        <Link href={'/'}>
          <p>Home page</p>
          {users.map((user, index) =>{
            return(
              <>
                <p key={user.id}>
                  <Link href={`/users/${user.id}`}>
                   {user.name}
                  </Link>
                </p>
                <br />
              </>
            )
          })}
        </Link>
      </h2>
    </section>
  )

  return content
}

export default Userspage