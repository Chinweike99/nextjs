import React from 'react'

export default async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!response.ok) throw new Error ("COuld not fetch data")
    // const data = await response.json();

    return response.json();

//   return ( 
//     <>
//         <div>
//             {data}
//         </div>
//     </>
// )
}
