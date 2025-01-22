import getEachUser from '@/lib/getEachUser';
import getEachUserPost from '@/lib/getUserPosts';
import React, { Suspense } from 'react'
import UserPosts from './Component/UserPosts';
import { Metadata } from 'next';


type Params = {
    params: {
        userId: string;
    }
}


// Having a dynamic metaData
export async function generateMetadata({ params: {userId}}: Params) : Promise<Metadata> {
  const userData: Promise<User> = getEachUser(userId);
  const user: User = await userData

  return({
    title: user.name,
    description: `${user.name} || Page`
  })
}


export default async function Userpage({params: {userId}} : Params) {
  const userData: Promise<User> = getEachUser(userId);
  const userPost: Promise<Post[]> = getEachUserPost(userId);

  // const [user, userPosts] = await Promise.all([userData, userPost])
  const user = await userData;

  return (
    <>
      <h2>{user.name}</h2> <br />
      <Suspense fallback={<p>Loading ...</p>}>
        {/* <UserPosts posts={userPosts} /> */}
        <UserPosts promise={userPost} />
      </Suspense>
    </>
  )
}
