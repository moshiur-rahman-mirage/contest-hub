import React, { useEffect, useState } from "react";
import AnimatedNumbers from "../../component/AnimatedNumbers";
import InViewParagraph from "../../component/InViewParagraph";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Circles } from "react-loader-spinner";
import { AnimatePresence } from "framer-motion";
import Overlay from "../../component/Overlay";
import Modal from "../../component/Modal";

const ContestType = () => {
  const axiosPublic = useAxiosPublic();
  const [category, setCategory] = useState("Article Writing");
  const [loading, setLoading] = useState(true);
  const [cardData, setCardData] = useState(null);
  const [color, setColor] = useState("bg-lime-400");
  const contestUrl = `/contest?contest_category=${category}&size=5`;
  

  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };


  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axiosPublic.get(contestUrl);
      const fetchedData = response.data;
      setCardData(fetchedData);
      console.log(fetchedData);
      console.log("here");
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category, axiosPublic]);

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

  const handleCategoryChange = (color, title) => {
    console.log("alskdfj");
    console.log(title);
    setLoading(true);
    setCardData(null);
    setCategory(title);
    setColor(color);
    console.log("inside handleCategoryChange");
  };
  console.log(color);
  return (
    <div id="contesttype" className="bg-[#EEF1F4]">
      <div className="grid place-items-center  capitalize">
        <div className="h-[50%] py-20">
          <span className="inline-block text-center text-5xl md:text-7xl mx-auto font-bold text-yellow-400">
            <AnimatedNumbers value={100} />+{" "}
            <span className="font-normal text-slate-950">Contest to Join</span>
          </span>
          <InViewParagraph
            className=" pt-10 text-lg md:max-w-2xl text-center"
            text="100+ Contest present for you to choose. Join today, Participate in a contest. And unleaseh 
          your inner potential."
          />
        </div>

        <div className="pt-20">
          <InViewParagraph
            className=" pb-10 font-bold uppercase text-6xl text-center"
            text="Top Contests"
          />
          <div className="flex items-center justify-center gap-5">
            <ul className="flex items-center flex-wrap justify-center gap-5 pb-10">
              <li className=" border p-2 bg-lime-400 rounded-sm">
                <button
                  onClick={() => {
                    handleCategoryChange("bg-lime-400", "Article Writing");
                  }}
                  className="mx-4 text-xl capitalize opacity-80 relative group"
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
              <li className=" border p-2 bg-cyan-300 rounded-sm">
                <button
                  onClick={() => {
                    handleCategoryChange("bg-cyan-300", "Gaming Contest");
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
              <li className=" border p-2 bg-amber-300 rounded-sm">
                <button
                  onClick={() => {
                    handleCategoryChange("bg-amber-300", "Business Contest");
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
              <li className=" border p-2 bg-purple-300 rounded-sm">
                <button
                  onClick={() => {
                    handleCategoryChange("bg-purple-300", "Medical Contest");
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
        </div>
        <div>
          {loading ? (
            <>
              <div className="min-h-[400]">
                <Circles
                  height="200"
                  width="200"
                  color="#4fa94d"
                  ariaLabel="circles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            </>
          ) : (
            <div className="grid gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
              {/* {cardData.map((contest) => {
                return (
                  <ContestCard
                    key={contest._id}
                    open={openModal}
                    contest={contest}
                    color={color}
                    
                    
                  />
                );
              })} */}
            </div>
          )}
        </div>
      </div>
      {/* <AnimatePresence>
        {open && (
          <Overlay close={closeModal}>
            <Modal data={data} close={closeModal} />
          </Overlay>
        )}
      </AnimatePresence> */}
    </div>
  );
};

export default ContestType;
