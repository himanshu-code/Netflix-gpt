import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { client } from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/gptSlice";
const GptSearchBar = ({ onSearchClick }) => {
  const selectLanguage = useSelector((state) => state.lang.language);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    if (searchText.current.value) {
      const gptQuery =
        "Act as a Movie recommendation system and suggest some movies for the query " +
        searchText.current.value +
        ". only give me names of 5 movies, comma separated like the example result give ahead. Example Result: Gadar,Sholay,Don,Dhoom,Golmaal";
      onSearchClick(true);
      const chatCompletion = await client.chat.completions.create({
        messages: [
          { role: "system", content: "" },
          { role: "user", content: gptQuery },
        ],
        model: "gpt-4o",
        temperature: 1,
        max_tokens: 4096,
        top_p: 1,
      });
      console.log(chatCompletion);
      if (!chatCompletion.choices) {
      }
      const gptMovies = chatCompletion.choices[0].message.content.split(",");

      const moviesData = gptMovies.map((movie) => searchMoviesTMDB(movie));
      const movies = await Promise.all(moviesData);
      console.log(movies);
      dispatch(
        addGPTMovieResult({ movieNames: gptMovies, movieResults: movies })
      );
      onSearchClick(false);
    }
  };
  return (
    <div className="pt-[35%] md:pt-[10%]  flex justify-center">
      <form
        className=" w-full mt-2 md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-12 md:col-span-9 border-1  bg-white"
          placeholder={lang[selectLanguage].gptSearcPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="col-span-12  md:col-span-3 m-4 py-2 px-4 bg-red-500 rounded-lg "
        >
          {lang[selectLanguage].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
