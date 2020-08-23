import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "./Accordion";

function Search() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    (async () => {
      if (term) {
        const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
          params: {
            action: "query",
            list: "search",
            origin: "*",
            format: "json",
            srsearch: term,
          },
        });
        const res = data.query.search.map((wikitem: any) => {
          return {
            title: wikitem.title,
            content: wikitem.snippet,
          };
        });
        setResults(res);
      }
    })();
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="searchterm">Enter Search Term:</label>
          <input
            className="input"
            id="searchterm"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <Accordion items={results} />
        </div>
      </div>
    </div>
  );
}

export default Search;
