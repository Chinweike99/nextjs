import React from 'react'

export default async function getEachUserPost(userId: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    if(!response.ok) throw new Error ("Unable to fetch data")

    return response.json()
}
