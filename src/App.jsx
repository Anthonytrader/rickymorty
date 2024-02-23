import { useEffect, useState, useRef } from "react";
import useFetch from "./hooks/useAxios";
import InfoLocation from "./components/InfoLocation";
import CardResident from "./components/CardResident";
import locationName from './models/locationsName.js'
import "./App.css";

function App() {
  const randomIdLocation = Math.floor(Math.random() * 126) + 1;
  const [locationId, setLocationId] = useState(randomIdLocation);

  const [mydata, getData, isLoading, hasError] = useFetch(
    `https://rickandmortyapi.com/api/location/${locationId}`
  );

  //Cada ves que cambie el valor de locationId se ejecuta la funcion getData y cuando se carga la pagina
  useEffect(() => {
    getData();
  }, [locationId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const valorInput = inputTextSearch.current.value.trim();
    setLocationId(valorInput);
    //getData(`https://rickandmortyapi.com/api/location/${valorInput}`);
  };

  const handleSelectChange = (e) =>{
    e.preventDefault();
    
    const valorInput = inputSelectSearch.current.value.trim();
    
    console.log(valorInput);
    setLocationId(valorInput);
  };

  const inputTextSearch = useRef();
  const inputSelectSearch = useRef();
  let contador = 1;
  const formulario = <form className="app__form" onSubmit={handleSubmit}>
  <input
    className="app__input"
    type="text"
    placeholder="Search"
    ref={inputTextSearch}
  />
  <button className="app__btn">Search</button>
</form>;



  

  

  return (
    <>
      <div className="app">
        <h1 className="app__title logo"></h1>
        <div className="inputselect">
        <select className=" app__input app__form flex justify-center items-center" ref={inputSelectSearch} onChange={handleSelectChange}>
          {locationName.map((location) => {
            
            return (
              <option key={location} value={contador++} >
                {location}
              </option>
            );
          })}
        </select>
        </div>
        
        
        <div className="infolocation container">
          {(isLoading && <p className="text-white">Loading...</p>) ||
            (hasError && (
              <p>
                <h1 className="text-3xl font-bold">
                  ❌ Hey! you must provide an id from 1 to 126
                </h1>
              </p>
            )) || (
              <>
                <InfoLocation data={mydata} />
                <div className="app__card-container">
                  {mydata?.residents?.map((url) => {
                    return <CardResident key={url} url={url} />;
                  })}
                </div>
              </>
            )}
        </div>
      </div>
    </>
  );
}

export default App;
