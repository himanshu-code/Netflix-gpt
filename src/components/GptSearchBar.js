import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
const GptSearchBar = () => {
  const selectLanguage = useSelector((state) => state.lang.language);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9 border-1  bg-white"
          placeholder={lang[selectLanguage].gptSearcPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-500 rounded-lg ">
          {lang[selectLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
