import React, { useState, useRef, useCallback } from "react";
import useBookSearch from "./useBookSearch";

const ApiCall = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("Visible");
          setPageNumber((prevpageNumber) => prevpageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const hanldeSearch = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
    setPageNumber(1);
  };

  console.log(books);
  return (
    <>
      <input type="text" value={query} onChange={hanldeSearch}></input>
      {books.map((book, index) => {
        if (books.length === index + 1) {
          return (
            <div ref={lastBookElementRef} key={book}>
              {book}
            </div>
          );
        }
        return <div key={book}>{book}</div>;
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Erro"}</div>
    </>
  );
};

export default ApiCall;
