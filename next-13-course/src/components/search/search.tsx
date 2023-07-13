"use client";
import * as React from "react";

interface SearchProps {
  onSearch(q: string): void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const search = formData.get("input");

        if (typeof search === "string") {
          onSearch(search);
        }
      }}
    >
      <input type="text" name="input" />

      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
