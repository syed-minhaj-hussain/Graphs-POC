import { appleStock } from "@visx/mock-data";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  Brush,
} from "recharts";
function App() {
  const myData = appleStock.map(({ date, close }) => {
    const newDate = date.slice(0, 10);
    return { newDate, close };
  });
  // console.log(myData);

  return (
    <div
      className="App"
      style={{ margin: 0, padding: 0, boxSizing: "border-box" }}
    >
      <div
        style={{
          // marginTop: "10rem",
          // backgroundColor: "#111827",
          // backgroundColor: "#F1F4F9",
          backgroundColor: "rgba(70, 99, 210, 0.2)",
          borderRadius: "10px",
          padding: "0.5rem",
          maxWidth: "340px",
          position: "fixed",
        }}
      >
        <AreaChart
          width={340}
          height={300}
          data={myData.concat(myData.slice(0, 900))}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          style={{ position: "relative", zIndex: 5 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="25%"
                stopColor="rgba(70, 89, 200, 0.7)"
                stopOpacity={0.3}
              />
              <stop
                offset="95%"
                stopColor="rgba(70, 89, 200, 0.6)"
                stopOpacity={0.2}
              />
            </linearGradient>
          </defs>
          <XAxis dataKey="newDate" hide />
          <YAxis
            hide
            domain={[myData[0].close, myData[myData.length - 1].close]}
          />
          {/* <CartesianGrid strokeDasharray="1 1" /> */}
          <Tooltip
            itemStyle={{ backgroundColor: "black" }}
            labelStyle={{ backgroundColor: "red" }}
            cursor={{ stroke: "#7B67C1", strokeWidth: 1.5 }}
            // viewBox={{ x: 0, y: 0, width: 800, height: 800 }}
            // allowEscapeViewBox={{ x: true, y: true }}
            // active={true}
            position={{ x: 10, y: 10 }}
            // coordinate={{ x: 200, y: 140 }}
            // payload={[{ name: "05-01", value: 12, unit: "kg" }]}
            content={({ active, label, payload }) => {
              // console.log({ active, label, payload });
              return (
                <div>
                  {active && payload && label && (
                    <div
                      style={{
                        padding: "0.5rem",
                        backgroundColor: "#252149",
                        width: "75px",
                        fontSize: "0.6rem",
                        color: "white",
                        borderRadius: "8px",
                        paddingRight: "0rem",
                      }}
                    >
                      <p style={{ marginBottom: "0.1rem" }}>
                        Nav{" "}
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
          <Brush
            data={myData.concat(myData.slice(0, 900))}
            // dataKey="newDate"
            travellerWidth={10}
            endIndex={100}
            stroke="#7B67C1"
            height={30}
            // gap={5}
          />

          <Area
            type="monotone"
            dataKey="close"
            stroke="#8884d8"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorUv"
          />
        </AreaChart>
      </div>
    </div>
  );
}

export default App;
