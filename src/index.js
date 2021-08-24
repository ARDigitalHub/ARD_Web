import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
import "./style.css";
//DATA
//syntax of a named import
// what every is the variable name in the file imported must be used as it is inside the {} for named import type
import { bookData } from "./library/books";
//import code
//default import syntax.. Also you can import it as Jaba-the-hut and code still works,just dont forget to use it as same in the following function
import Book from "./library/Book";
import Nav from "./navbar/navBar";



//CODE uses id for each object
function Booklist() {
  return (
    <div className="booklist">
      {bookData.map((asa) => {
        return <Book key={asa.id} {...asa}></Book>;
      })}
    </div>
  );
}

ReactDom.render(<><Nav />  <Booklist/> </> , document.getElementById("root"));
