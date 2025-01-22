"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {

  useEffect(()=>{
    console.log("hello ")
  }, [])
  return (
    <main>
      <h1>Hello ...</h1>
      <Link href={'/users'}>
        go to users
      </Link>
    </main>
  );
}
