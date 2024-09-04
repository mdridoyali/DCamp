
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Donation = () => {
  const [donates, setDonates] = useState([]);
  const [seeAll, setSeeAll] = useState(4);
  useEffect(() => {
    const donateItems = JSON.parse(localStorage.getItem("donation"));
    if (donateItems) {
      setDonates(donateItems);
    }
  }, []);

  const seeAllBtn = () => {
    setSeeAll(donates.length);
  };

  return (
    <div className="mb-10">
      <div className="w-11/12 md:w-10/12 mt-10 mb-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 justify-between">
        {donates.slice(0, seeAll).map((donate, idx) => (
          <div
            key={idx}
            style={{ backgroundColor: donate.card_bg }}
            className="rounded-lg flex "
          >
            <img className="w-[50%] lg:w-[250px] " src={donate.image_don} alt={donate.title} />
            <div className="p-4 space-y-4  ">
              <p
                style={{
                  backgroundColor: donate.category_bg,
                  color: donate.text_color,
                }}
                className="w-min px-3 rounded font-semibold"
              >
                {donate.category}
              </p>
              <h2 className="font-bold text-xl">{donate.title}</h2>
              <p style={{ color: donate.text_color }} className="font-bold">
                ${donate.price.toFixed(2)}{" "}
              </p>
              <Link to={`/card/${donate.id}`} >
                <button
                  style={{ backgroundColor: donate.text_color }}
                  className="px-2 py-1 rounded-md text-white  "
                >
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {
        <div className="mx-auto text-center ">
          {donates.length > 4 && seeAll < donates.length ? (
            <button
              onClick={seeAllBtn}
              className={`bg-green-500 hover:bg-green-600 px-4 text-lg font-semibold text-white rounded-md py-1 ${
                seeAll === donates.length ? "hidden" : " "
              }`}
            >
              See All
            </button>
          ) : null}
        </div>
      }
    </div>
  );
};

export default Donation;
