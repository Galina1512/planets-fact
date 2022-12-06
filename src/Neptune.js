import { React, useState } from "react";
import data from "./data.json";
import "./App.css";

  function Neptune(){
    const [activeBtn1, setActiveBtn1] = useState(true);
    const [activeBtn2, setActiveBtn2] = useState(false);
    const [activeBtn3, setActiveBtn3] = useState(false);
  
    
    const [isOver, setIsOver] = useState(true);
    const [isStruct, setIsStruct] = useState(false);
    const [isGeo, setIsGeo] = useState(false);
  
    function overview(){
      setIsOver(true);
      setIsStruct(false);
      setIsGeo(false);
      setActiveBtn1(true);
      setActiveBtn2(false);
      setActiveBtn3(false);
      }
    function structure(){
      setIsOver(false);
      setIsStruct (true);
      setIsGeo(false);
      setActiveBtn1(false);
      setActiveBtn2(true);
      setActiveBtn3(false);
        }

    function geology(){
      setIsOver(false);
      setIsStruct(false);
      setIsGeo(true);
      setActiveBtn1(false);
      setActiveBtn2(false);
      setActiveBtn3(true);
      }
  
    return(
      <div>
      <main> 

          <div className={isOver ? "isOver" : null}>
            {isOver ? (
              <div className="image-planets">
                <div>
            <img src={data[7].images.planet.toString()}  alt="pic" className="earth1"/>
            </div>
            <div className="whole-text">
              <h1 className="name">{data[7].name} </h1>
              <p className="text">{data[7].overview.content} </p>
              <p className="text-source">Source : Wikipedia <a href={data[7].overview.source} target="_blank" rel="noreferrer"> <img src="./assets/external-link.png" alt="" className="reference"/></a>
              </p>
            </div>
            </div>) : null};
          </div>
          <div className= {isStruct ? "isStruct" : null}>
            {isStruct ? (
              <div className="image-planets">
                <div>            
                  <img src={data[7].images.internal.toString()}  alt="pic" className="earth1"/>
                </div>

            <div className="whole-text">
              <h1 className="name">{data[7].name} </h1>
              <p className="text">{data[7].structure.content} </p>
              <p className="text-source">Source : Wikipedia <a href={data[7].structure.source} target="_blank" rel="noreferrer"> <img src="./assets/external-link.png" alt="" className="reference"/></a>
              </p>
            </div> 
            </div>) : null};
          </div>

          <div className= {isGeo ? "isGeo" : null}>
            {isGeo ? (
              <div className="image-planets">
                <div>
            <img src={data[7].images.planet.toString()}  alt="pic" className="earth1"/>
            <img src={data[7].images.geology.toString()} alt="" className="aplication"/>
            </div>
            <div className="whole-text">
              <h1 className="name">{data[7].name} </h1>
              <p className="text">{data[7].geology.content} </p>
              <p className="text-source">Source : Wikipedia <a href={data[7].geology.source} target="_blank" rel="noreferrer"> <img src="./assets/external-link.png" alt="" className="reference"/></a>
              </p>
            </div> 
            </div>) : null};
          </div>


              <div className="buttons">
              <button className= {activeBtn1 ? " btn1-neptune active" : "btn"}  onClick={overview} 
                   ><span className= {activeBtn1 ? " numer active" : "numer"} >01</span> Overview </button> 

                  <button className= {activeBtn2 ? "btn2-neptune active" : "btn"}  onClick={structure} 
                  ><span className={activeBtn2 ? " numer active" : "numer"}>02</span ><span className = {activeBtn2 ? " span active" : "span"}>Internal</span> Structure </button>

                  <button className= {activeBtn3 ? "btn3-neptune active" : "btn"} onClick={geology} 
                  > <span className={activeBtn3 ? " numer active" : "numer"}>03</span>Surface <span className= {activeBtn3 ? " span active" : "span"}> Geology</span> </button>
              </div>
      </main>

      <footer>

<div className="parameter">
      <div className="boxing box-rotation">
              <p>Rotation Time</p>
              <h2 className="rotation">{data[7].rotation} </h2>
            </div>

            <div className="boxing box-revolution">
        <p>Revolution Time</p>
        <h2 className="revolution">{data[7].revolution} </h2>
      </div>

      <div className="boxing box-radius">
        <p>Radius</p>
        <h2 className="radius">{data[7].radius} </h2>
      </div>

      <div className="boxing box-temp">
        <p>Average Temp.</p>
        <h2 className="temp">{data[7].temperature} </h2>
      </div>
      </div>
  </footer>
    </div>
  )
  }
  export default Neptune;

