import { useContext } from "react";

import { BandAdd } from "../components/BandAdd";
import { BandList } from "../components/BandList";
import { ChartBands } from "../components/ChartBands";
import { socketContext } from "../context/socketContext";

function HomePage() {

  const { online } = useContext(socketContext) 

  return (
    <div className="container">
      <div className="alert">
        <p>
          Service status:
          {
            online
            ? <span className="text-success"> Online</span>
            : <span className="text-danger"> Offline</span> 
          }
        </p>
      </div>

      <h1>BandNames</h1>
      <hr/>

      <div className="row">
        <div className="col">
          <ChartBands />
        </div>
      </div>

      <div className="row">
        <div className="col-8">
          <BandList />
        </div>
        <div className="col-4">
         <BandAdd />
        </div>
      </div>

    </div>
  );
}

export default HomePage;
