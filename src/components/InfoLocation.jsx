import "../styles/InfoLocation.css";

const InfoLocation = ({ data }) => {
  return (
    <div className="location">
      <h2 className="location__name  ">
        Name: {data?.name}
      </h2>
      <ul className="location__ul-info">
        <li className="location__li-item">
          <span className="location__span-label">Type</span>
          <span className="location__span-value">{data?.type}</span>
        </li>
        <li className="location__li-item">
          <span className="location__span-label">Dimesion</span>
          <span className="location__span-value">{data?.dimension}</span>
        </li>
        <li className="location__li-item">
          <span className="location__span-label">Population</span>
          <span className="location__span-value">
            {data?.residents?.length}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default InfoLocation;
