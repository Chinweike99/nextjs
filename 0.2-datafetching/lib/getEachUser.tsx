import React from 'react'

export default async function getEachUser() {
    const response = await fetch("");

    if(!response.ok) throw new Error ("Unable to fetch data")

    return response.json()
}
