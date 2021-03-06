import React from "react";

export default function Button({ title, onClick }) {
  let classNames =
    "sm:w-full md:w-full lg:w-1/3 xl:w-1/3 text-sm font-bold tracking-wider bg-transparent hover:bg-black text-black font-semibold hover:text-white py-4 px-12 border-2 border-black hover:border-transparent";

  return (
    <button onClick={onClick} className={classNames}>
      <div>{title}</div>
    </button>
  );
}
