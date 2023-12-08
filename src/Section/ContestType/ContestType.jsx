import React, { useState } from "react";
import AnimatedNumbers from "../../component/AnimatedNumbers";
import InViewParagraph from "../../component/InViewParagraph";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ContestCard from "../../component/ContestCard";
import { Link } from "react-router-dom";

const ContestType = () => {
  const axiosPublic = useAxiosPublic();
  const [category, setCategory] = useState('Gaming Contest');
  const [loading, setLoading] = useState(true);
  const [cardData, setCardData] = useState(null);

  const contestUrl = `/contest?contest_category=${category}&size=4`;
  console.log(contestUrl);
  const {
    isLoading,
    error,
    data: top5 = [],
    refetch,
  } = useQuery({
    queryKey: ["topContest"],
    enabled: !category,
    queryFn: async () => {
      const res = await axiosPublic.get(contestUrl);
      console.log(res)
      setCardData(res.data);
      setLoading(false);
      return res.data
    },
  });
  // console.log(cardData);
  const CustomLink = ({ href, title, className = "" }) => {
    // return (
    <button
      onClick={() => {
        handleCategoryChange(title);
      }}
      href={href}
      className={`${className} relative group`}
    >
      {title}
      <span
        className={`h-0.5 w-0 group-hover:w-full transition-[width] ease duration-300 inline-block
           bg-red-600 absolute left-0 -bottom-0.5 `}
      >
        &nbsp;
      </span>
    </button>;
    // );
  };

  const handleCategoryChange = (title) => {
    console.log(title)
    setLoading(true);
    setCardData(null)
    setCategory(title);
    refetch();
  };
  // console.log(category);
  return (
    <div id="contesttype" className="bg-[#EEF1F4]">
      <div className="grid place-items-center pt-20 capitalize">
        <span className="inline-block text-7xl font-bold text-yellow-400">
          <AnimatedNumbers value={100} />+{" "}
          <span className="font-normal text-slate-950">Contest to Join</span>
        </span>
        <InViewParagraph
          className="py-10 text-lg max-w-2xl text-center"
          text="100+ Contest present for you to choose. Join today, Participate in a contest. And unleaseh 
          your inner potential."
        />
        <div className="flex items-center justify-center gap-5">
          <ul className="flex items-center justify-center gap-5 pb-10">
            <li>
              <button
                onClick={() => {
                  handleCategoryChange("Article Writing");
                }}
                className="mr-4 text-xl capitalize opacity-80 relative group"
              >
                Article Writing
                <span
                  className={`h-0.5 w-0 group-hover:w-full transition-[width] ease duration-300 inline-block
           bg-red-600 absolute left-0 -bottom-0.5 `}
                >
                  &nbsp;
                </span>
              </button>{" "}
            </li>
            <li>
              <button
                onClick={() => {
                  handleCategoryChange("Gaming Contest");
                }}
                className="mr-4 text-xl capitalize opacity-80 relative group"
              >
                Gaming Contest
                <span
                  className={`h-0.5 w-0 group-hover:w-full transition-[width] ease duration-300 inline-block
           bg-red-600 absolute left-0 -bottom-0.5 `}
                >
                  &nbsp;
                </span>
              </button>{" "}
            </li>
            <li>
              <button
                onClick={() => {
                  handleCategoryChange("Business Contest");
                }}
                className="mr-4 text-xl capitalize opacity-80 relative group"
              >
                Business Contest
                <span
                  className={`h-0.5 w-0 group-hover:w-full transition-[width] ease duration-300 inline-block
           bg-red-600 absolute left-0 -bottom-0.5 `}
                >
                  &nbsp;
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleCategoryChange("Medical Contest");
                }}
                className="mr-4 text-xl capitalize opacity-80 relative group"
              >
                Medical Contest
                <span
                  className={`h-0.5 w-0 group-hover:w-full transition-[width] ease duration-300 inline-block
           bg-red-600 absolute left-0 -bottom-0.5 `}
                >
                  &nbsp;
                </span>
              </button>
            </li>
          </ul>
        </div>
        <div>
          {loading && cardData?.contest_category!==category ? (
            <p>Loading...</p>
          ) : (
            <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
              {cardData.map((contest) => {
                return <ContestCard key={contest._id} contest={contest} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContestType;
