import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const Card = () => {
  const [showCard, setShowCard] = useState([]);

  const { id } = useParams();
  const cards = useLoaderData();
  console.log(showCard);

  const handleAddToDonate = () => {
    const addToDonate = [];
    const donateItems = JSON.parse(localStorage.getItem("donation"));
    if (!donateItems) {
      addToDonate.push(showCard);
      localStorage.setItem("donation", JSON.stringify(addToDonate));
      swal("Good job!", "You added donation!", "success");
    } else {
      const isExits = donateItems.find((showCard) => showCard.id === id);
      if (!isExits) {
        addToDonate.push(...donateItems, showCard);
        localStorage.setItem("donation", JSON.stringify(addToDonate));
        swal("Good job!", "You added donation!", "success");
      } else {
        swal("Don't Duplicate!", "Already added this item!", "error");
      }
    }
  };

  useEffect(() => {
    const findCard = cards.find((card) => card.id === id);
    setShowCard(findCard);
  }, [id, cards]);

  return (
    <div className="">
      <div className="w-11/12 md:w-10/12 mx-auto ">
        <div className="relative mx-auto w-full h-[460px]">
         <div className="absolute inset-x-0 bottom-0 h-24 bg-black rounded-b-lg opacity-50"></div>
          <img
            className="w-full h-[460px] rounded-xl"
            src={showCard.image}
            alt="Your Image Alt Text"
          />
        </div>

        <button
          onClick={handleAddToDonate}
          style={{ backgroundColor: showCard.text_color }}
          className=" bottom-16 left-6  relative px-2 py-1 text-lg font-semibold text-white rounded-md "
        >
          {" "}
          Donate ${showCard.price}
        </button>
        <h2 className="text-xl font-bold">{showCard.title}</h2>
        <p className="mb-10">{showCard.description}</p>
      </div>
    </div>
  );
};

export default Card;
