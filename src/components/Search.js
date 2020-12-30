import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';


const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);

  //useEffect will have nothing, an array that is empty, or an array not empty,
  // as its second argument
  // nothing (as 2nd arg): Run after every render and rerenders (componentDidMount and componentDidUpdate)
  // [] (as 2nd arg): run at initial render (componentDidMount)
  // [data] (as 2nd arg): every render, and rerender (if data is changed) (componentDidMount and componentDidUpdate, comparing prevState)

  // you cannot directly use async inside useEffect

  useEffect(() => {
    const search = async() => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        }
      })
      setResults(data.query.search);
    }

    if(term && !results.length) {
      search();
    }else{
      const timeoutId = setTimeout(() => {
        if(term){
          search();
        }
      }, 500);

      return () => {
        clearTimeout(timeoutId)
      }
    }



  }, [term])

  const renderedResults = results.map((result) => {
    let parsedResult = parse(result.snippet)
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="header">
            {result.title}
          </div>
            {parsedResult}
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />

        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>

  )
}

export default Search;
