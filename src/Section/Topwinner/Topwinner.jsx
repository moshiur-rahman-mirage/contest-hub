import React, { useEffect, useState } from "react";
import AnimatedText from "../../component/AnimatedText";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Circles } from "react-loader-spinner";
import UserCard from "../../component/Usercard";
import Winnercard from "../../component/Winnercard";


const Topwinner = () => {
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const topwinner = `users/winner/top`;
  const [cardData, setCardData] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axiosPublic.get(topwinner);
      const fetchedData = response.data;
      setCardData(fetchedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
    }
  };

  useEffect(() => {
    fetchData();
  }, [axiosPublic]);

console.log(cardData,'users data')

  return (
    <div className="bg-[#EEF1F4] grid place-items-center">
      <AnimatedText
        varitants="signelWord"
        className="text-xl text-center lg:text-5xl font-bold mt-10 py-10 md:text-4xl "
        text="FIND OUR TOP WINNER"
      />
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
          <div className="grid max-w-7xl gap-10 grid-cols-3">
            {cardData.map((user) => {
              return (
                <>
                 <Winnercard key={user._id} user={user}/>
                </>
              );
            })}
            {/* <UserCard/> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Topwinner;
