import React from 'react'

export default async function getEachUser(userId: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if(!response.ok) throw new Error ("Unable to fetch data")

    return response.json()
}
