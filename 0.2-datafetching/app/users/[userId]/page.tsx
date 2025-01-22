import getEachUser from '@/lib/getEachUser';
import getEachUserPost from '@/lib/getUserPosts';
import React from 'react'



type Params = {
    params: {
        userId: string;
    }
}

export default async function Userpage({params: {userId}} : Params) {
  const userData: Promise<User> = getEachUser(userId);
  const userPost: Promise<Post[]> = getEachUser(userId);

  const [user, userPosts] = await Promise.all([userData, userPost])

  return (
    <div>User</div>
  )
}
