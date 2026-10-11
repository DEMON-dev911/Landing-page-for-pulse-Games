import { useState } from "react";
import Data from "./Data.js";

function App() {
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const itemStyle =
    "border-2 border-white h-60 w-60 rounded-[30px] z-10 relative flex items-center justify-center hover:scale-102 overflow-hidden cursor-pointer";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-1 max-w-7xl mx-auto mt-20 justify-items-center">
      {Data.map((item) => {
        const isCurrentItemHovered = hoveredItemId === item.id;

        const imgStyle = isCurrentItemHovered
          ? "rounded-[30px] block scale-110 transition-transform duration-300 blur-[1px]"
          : "rounded-[30px] block transition-transform duration-300"; 

        const textStyle = isCurrentItemHovered
          ? "flex justify-center opacity-100 items-center text-white z-10 text-xl font-bold absolute transition-opacity duration-300 pointer-events-none"
          : "flex justify-center opacity-0 items-center text-white z-10 text-xl font-bold absolute transition-opacity duration-300 pointer-events-none";

        return (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredItemId(item.id)}
            onMouseLeave={() => setHoveredItemId(null)}
            className={itemStyle}
            onClick={() => {
              console.log(`Clicked on ${item.name}`);
              window.open(item.link, "_blank");
            }}
          >
            <img className={imgStyle} src={item.image || "testing.png"} alt={item.name} />
            <h2 className={textStyle}>{item.name}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
