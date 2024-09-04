
import { Link } from "react-router-dom";

const DonateCards = ({ filterCards }) => {
  console.log("filterCard", filterCards, typeof filterCards);

  return (
    <div className=" ">
      <div className="w-11/12 md:w-10/12  mx-auto my-16 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {filterCards.map((cards, idx) => (
          <Link to={`/card/${cards.id}`} key={idx}>
            <div
              style={{ backgroundColor: cards.card_bg }}
              className="rounded-lg h-full  cursor-pointer flex-grow-0  "
            >
              <img className="w-full h-56 md:h-40  rounded-t-lg" src={cards.image} />
              <div className="p-4">
                <p
                  style={{
                    backgroundColor: cards.category_bg,
                    color: cards.text_color,
                  }}
                  className="w-min px-3 rounded font-semibold"
                >
                  {cards.category}
                </p>
                <h2
                  style={{ color: cards.text_color }}
                  className="font-bold text-xl"
                >
                  {cards.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DonateCards;
