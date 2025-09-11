import { useRef } from "react";
import Card from "./card";

const Roll = ({ data }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 200; 
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      <div
        ref={scrollRef}
        className="w-full after:absolute movies relative snap-x snap-mandatory flex gap-4  overflow-x-scroll p-4 py-1"
      >
        {data.map((item, i) => {
          return (
            <Card
              image={item.poster_path}
              key={i}
              title={item.title ? item.title : item.name}
              id={item.id}
            />
          );
        })}
      </div>
      <button
        onClick={() => scroll("left")}
        className="absolute top-1/2 max-md:hidden left-0 backdrop-blur-xl w-12 h-12 active:scale-90 flex items-center justify-center rounded-full -translate-y-1/2 z-30"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
      </button>
      <button
        onClick={() => {
          scroll("right");
        }}
        className="absolute max-md:hidden top-1/2 right-0 w-12 h-12 flex items-center active:scale-90 justify-center rounded-full backdrop-blur-xl -translate-y-1/2  z-30 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Roll;
