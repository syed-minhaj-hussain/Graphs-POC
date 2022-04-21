import { ReachrtsPOC } from "./recharts/ReachartsPOC";
import Visx from "./visx";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import FigmaImage from "./figma-design.png";
import { useState } from "react";
import { useValue } from "./context/ValueContext";
import { Route, Routes } from "react-router-dom";

function App() {
  const [selected, setSelected] = useState("1m");
  const contextValue = useValue();

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          textAlign: "center",
          //   gap: "20px",
          paddingTop: "1rem",
          backgroundColor: "#F1F4F9",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2>Design</h2>
                <img src={FigmaImage} width={300} height={200} />
              </div>
            }
          />
          <Route path="/recharts" element={<ReachrtsPOC />} />
          <Route
            path="/visx"
            element={
              <ParentSize>{() => <Visx width={340} height={200} />}</ParentSize>
            }
          />
        </Routes>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100vw",
          marginTop: "1px",
          backgroundColor: "#F1F4F9",
          padding: "0.5rem",
          alignItems: "center",
        }}
      >
        <button
          className="btn"
          style={{
            border: `0.1rem solid #27ABA7`,
            color: selected === "1m" ? "#FFFFFF" : "#27ABA7",
            backgroundColor: selected === "1m" ? "#27ABA7" : "#F1F4F9",
            // marginRight: "1rem",
          }}
          onClick={() => {
            setSelected("1m");
            contextValue?.setValue(1250);
          }}
        >
          1m
        </button>
        <button
          className="btn"
          style={{
            border: `0.1rem solid #27ABA7`,
            color: selected === "6m" ? "#FFFFFF" : "#27ABA7",
            backgroundColor: selected === "6m" ? "#27ABA7" : "#F1F4F9",
            // marginRight: "1rem",
          }}
          onClick={() => {
            setSelected("6m");
            contextValue?.setValue(1100);
          }}
        >
          6m
        </button>
        <button
          className="btn"
          style={{
            border: `0.1rem solid #27ABA7`,
            color: selected === "1y" ? "#FFFFFF" : "#27ABA7",
            backgroundColor: selected === "1y" ? "#27ABA7" : "#F1F4F9",
            // marginRight: "1rem",
          }}
          onClick={() => {
            setSelected("1y");
            contextValue?.setValue(915);
          }}
        >
          1y
        </button>
        <button
          className="btn"
          style={{
            border: `0.1rem solid #27ABA7`,
            color: selected === "3y" ? "#FFFFFF" : "#27ABA7",
            backgroundColor: selected === "3y" ? "#27ABA7" : "#F1F4F9",
            // marginRight: "1rem",
          }}
          onClick={() => {
            setSelected("3y");
            contextValue?.setValue(185);
          }}
        >
          3y
        </button>
        <button
          className="btn"
          style={{
            border: `0.1rem solid #27ABA7`,
            color: selected === "5y" ? "#FFFFFF" : "#27ABA7",
            backgroundColor: selected === "5y" ? "#27ABA7" : "#F1F4F9",
            // marginRight: "1rem",
          }}
          onClick={() => {
            setSelected("5y");
            contextValue?.setValue(0); // since mock-data only gives 1280 points
          }}
        >
          5y
        </button>
      </div>
    </div>
  );
}

export default App;
