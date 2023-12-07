import React, { useState } from "react";
import AnimatedNumbers from "../../component/AnimatedNumbers";
import InViewParagraph from "../../component/InViewParagraph";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ContestCard from "../../component/ContestCard";



const ContestType = () => {
    const axiosPublic=useAxiosPublic();
    const [category,setCategory]=useState('Article Writing');
    const contestUrl=`/contest?contest_category=${category}&size=4`
console.log(category)
    const { data: top5 = [], refetch } = useQuery({
        queryKey: ['topContest'],
        queryFn: async () => {
            const res = await axiosPublic.get(contestUrl);
            return res.data;
        }
    })

  console.log(top5)

  return (
    <div id="contesttype" className="bg-[#EEF1F4]">
      <div className="grid place-items-center pt-20 capitalize">
        <span className="inline-block text-7xl font-bold text-yellow-400">
          <AnimatedNumbers value={100} />+{" "}
          <span className="font-normal text-slate-950">Contest to Join</span>
        </span>
        <InViewParagraph className="py-10 text-lg max-w-2xl text-center" text="100+ Contest present for you to choose. Join today, Participate in a contest. And unleaseh 
          your inner potential."/>
        <div className="flex items-center justify-center gap-5">
            <ul className="flex items-center justify-center gap-5 pb-10">
                <li><button className="btn btn-ghost text-xl capitalize opacity-80">Article Writing</button></li>
                <li><button className="btn btn-ghost text-xl capitalize opacity-80">Gaming contest</button></li>
                <li><button className="btn btn-ghost text-xl capitalize opacity-80">Business contest</button></li>
                <li><button className="btn btn-ghost text-xl capitalize opacity-80">Medical contest</button></li>
                
            </ul>
        </div>
        <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {
                    top5.map(contest => {
                        return (
                            <ContestCard key={contest._id} contest={contest} />

                        )
                    })
                }
        </div>
      </div>
    </div>
  );
};

export default ContestType;
