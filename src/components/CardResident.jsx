import { useEffect } from "react";
import useFetch from "../hooks/useAxios";
import "../styles/CardResident.css";

const CardResident = ({ url }) => {
  const [mydata, getData, isLoading, hasError] = useFetch(url);

  useEffect(() => {
    getData();
  }, []);

  let html = "";
  if (isLoading) return <h2 className="text-white">Loading...</h2>;
  if (hasError) return <h2>{hasError}</h2>;

  if (hasError) {
    return <h2>{hasError}</h2>;
  } else {
    html = (
      <div className="resident">
        <header className="resident__header">
          <img
            src={mydata?.image}
            alt={mydata?.name}
            className="resident__img"
          />
          <div className="resident__status">
            <div
              className={`resident__status-circle ${
                mydata?.status == "Alive" ? "alive" : "dead"
              }`}
            ></div>
            <span className="resident__status-value">{mydata?.status}</span>
          </div>
        </header>
        <section className="resident__body container">
          <h3 className="resident__h3-name">Resident Name: {mydata?.name}</h3>
          <hr className="resident__separator" />
          <ul className="resident__stats">
            <li className="resident__li-stats">
              <span className="resident__span-label">Specie</span>
              <span className="resident__span-value"> {mydata?.species}</span>
            </li>
            <li className="resident__li-stats">
              <span className="resident__span-label">Origin</span>
              <span className="resident__span-value"> {mydata?.origin?.name}  </span>
            </li>
            <li className="resident__li-stats">
              <span className="resident__span-label">Episodes</span>
              <span className="resident__span-value"> {mydata?.episode?.length}
              </span>
            </li>
          </ul>
        </section>
      </div>
    );
  }
  return html;
};

export default CardResident;
