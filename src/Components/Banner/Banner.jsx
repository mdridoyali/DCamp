import { createContext, useEffect, useState } from "react";
import DonateCards from "../DonateCards/DonateCards";
export const Cards = createContext("card");

const Banner = () => {
  const [searchCards, setSearchCards] = useState("");
  const [allCards , setAllCards] = useState([]);
  const [filterCards, setFilterCards] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchCards(e.target.text.value);
    e.target.text.value = "";
  };

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setAllCards(data));
  }, []);

  useEffect(() => {
    if (searchCards && allCards.length > 0) {
      const result = allCards.filter((cards) => cards.category.toLowerCase() === searchCards.toLowerCase());
      setFilterCards(result);
    } else if (searchCards === "" && allCards.length > 0) {
      setFilterCards(allCards);
    } else {
      setFilterCards([]);
    }
  }, [searchCards, allCards]);

  return (
 <div>
     <div className="relative">
      <div className="absolute inset-20 bg-white opacity-50"></div>
      <img
        className="w-full h-[380px]"
        src={`https://i.ibb.co/mrs5KZ8/image.png`}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-5xl px-2 font-bold mb-8 text-center">
          I Grow By Helping People In Need
        </h2>
        <div className="flex items-center">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Category"
              name="text"
              className="py-2 px-4 rounded-s-md border-2 outline-none "
            />
            <input
              type="submit"
              value="Search"
              className="py-[9px] px-4 cursor-pointer rounded-e-md bg-[#FF444A] text-white hover:bg-blue-600"
            />
          </form>
        </div>
      </div>
     
    </div>
     <Cards.Provider value="card">
         <DonateCards filterCards={filterCards} ></DonateCards>
      </Cards.Provider>
 </div>
  );
};

export default Banner;
