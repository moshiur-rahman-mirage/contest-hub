import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Circles } from "react-loader-spinner";
import ContestCard from "../../../component/ContestCard";
import { AnimatePresence } from "framer-motion";
import Overlay from "../../../component/Overlay";
import Modal from "../../../component/Modal";

const Allcontests = () => {
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const [color, setColor] = useState("bg-lime-400");
  const [cardData, setCardData] = useState(null);
  const [category, setCategory] = useState("Article Writing");
  const contestUrl = `/contest?contest_category=${category}`;
  const [open, setOpen] = useState(false);
  const [selectedContest,setSelectedContest]=useState([])
  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
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

  const handleCardClick=(contest)=>{
    console.log('clicked')
    console.log(contest)
    setSelectedContest(contest)
  }

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axiosPublic.get(contestUrl);
      const fetchedData = response.data;
      setCardData(fetchedData);
      console.log(fetchedData);
      console.log("here");
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
    }
  };

  useEffect(() => {
    fetchData();
  }, [category, axiosPublic]);

  return (
    <div>
      <div className="grid pt-40 pb-20 text-5xl font-bold place-items-center">
        Discover All Contests
      </div>
      <div className="flex   items-center justify-center gap-5">
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

      <div className="grid place-items-center">
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
              {cardData.map((contest) => {
                return (
                  <>
                    <ContestCard
                      key={contest._id}
                      open={openModal}
                      contest={contest}
                      color={color}
                      onClick={handleCardClick}
                    />
                    <AnimatePresence>
                      {open && (
                        <Overlay close={closeModal}>
                            {console.log(contest,'here')}
                          <Modal contest={selectedContest} close={closeModal} />
                        </Overlay>
                      )}
                    </AnimatePresence>
                  </>
                );
              })}
            </div>
          )}
        </div>





    </div>
  );
};

export default Allcontests;
