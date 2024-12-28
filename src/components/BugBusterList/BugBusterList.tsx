"use client";

import { IBugBuster } from "@/definition/definition";
import Link from "next/link";
import { fetchBugBusterList } from "@/data/fetchBugBuster";
import {useEffect, useState } from "react";

export default function BugBusterList() {

  const [bugBusterList, setBugBusterList] = useState<IBugBuster[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBugList(){
      setIsLoading(false)
      try{
        setIsLoading(true);
        const data = await fetchBugBusterList();
        const bugList = data.bugList
        setBugBusterList(bugList);

      }catch(error){
        if(error instanceof Error){
          return "Server Error";
        }
      }finally{
        setIsLoading(false);
      }
    }
    fetchBugList();
  }, [])
  return (
    <>
      { isLoading ? <p>Loading...</p> : <div>
        {bugBusterList.map((bugBuster) => (
          <Link
            key={bugBuster.id}
            className="py-4 flex flex-col mt-2 border-b border-border w-full max-w-2xl font-medium hover:text-slate-500 transition-colors duration-200 ease-in-out"
            href={`/bug-buster/${bugBuster.id}`}
          >
            {bugBuster.title}
          </Link>
        ))}
      </div>
}
    </>
  );
}
