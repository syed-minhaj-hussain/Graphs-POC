import { appleStock } from "@visx/mock-data";
import React from "react";
import {
  //   CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
  //   Brush,
} from "recharts";
import { useValue } from "../context/ValueContext";

// interface Data {
//   date: string;
//   value: string;
// }

export const ReachrtsPOC: React.VFC<{
  data: { date: string; value: string }[] | undefined;
}> = ({ data }) => {
  const contextValue = useValue();
  // const myData = appleStock.map(({ date, close }) => {
  //   const newDate = date.slice(0, 10);
  //   return { newDate, close };
  // });
  const myData = data?.map(({ date, value }) => {
    const newDate = date.slice(0, 10);
    const newValue = parseInt(value, 0);
    return { newDate, close: newValue };
  });
  // console.log(myData.slice(0, contextValue?.value).length);
  // console.log(myData.slice(contextValue?.value));
  console.log(myData);

  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "#F1F4F9",
          height: "250px",
        }}
      >
        {/* <>{myData && myData.length > 0 && <h1>Yes</h1>}</> */}
        {myData && myData.length > 0 && (
          <ResponsiveContainer width={350}>
            <AreaChart
              height={320}
              data={myData && myData.slice(0, contextValue?.value)}
              //   data={myData.concat(myData.slice(0, 900))}
              margin={{ top: 10, bottom: 1 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7459D9" stopOpacity={0.2} />
                  <stop offset="75%" stopColor="#7459D9" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <XAxis dataKey="newDate" hide />
              <YAxis
                hide
                //   domain={[myData[0].close, myData[myData.length - 1].close]}
              />
              <Tooltip
                cursor={{ stroke: "#7B67C1", strokeWidth: 1.5 }}
                position={{ x: 10, y: 10 }}
                content={({ active, label, payload }) => {
                  return (
                    <div>
                      {active && payload && label && (
                        <div
                          style={{
                            padding: "0.5rem",
                            backgroundColor: "#252149",
                            width: "100px",
                            fontSize: "0.75rem",
                            color: "white",
                            borderRadius: "8px",
                            paddingRight: "0.5rem",
                            marginTop: "-1rem",
                          }}
                        >
                          <p style={{ marginBottom: "0.1rem" }}>
                            NAV{" "}
                            <span style={{ fontWeight: "bold" }}>
                              {payload[0].payload.close}
                            </span>{" "}
                          </p>
                          <p> {label}</p>
                        </div>
                      )}
                    </div>
                  );
                }}
              />

              <Area
                type="monotone"
                dataKey="close"
                stroke="#8884d8"
                strokeWidth={1.5}
                fillOpacity={1}
                fill="url(#colorUv)"
                animationDuration={700}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};
