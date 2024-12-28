"use client";
//import BugBusterList from "@/components/BugBusterList/BugBusterList";
import BugBusterList from "@/components/BugBusterList/BugBusterList";
import { fetchBugBusterList } from "@/data/fetchBugBuster";
import { IBugBuster, } from "@/definition/definition";
//import dynamic from "next/dynamic";
import {useEffect, useState } from "react";

export default  function BugBusterPage() {
  const [bugBusterList, setBugBusterList] = useState<IBugBuster[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(bugBusterList);

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
      <section className="py-16 px-4">
        <header>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-semibold">Bug Buster</h1>
            <p className="text-xl font-medium text-primary-brand max-w-lg">
              A collection of errors and challenges and how I solved them.
            </p>
          </div>
        </header>
       {
        isLoading ? <p>Loading</p> : <BugBusterList bugBusterList={bugBusterList}/>
       }
      </section>
    </>
  );
}
