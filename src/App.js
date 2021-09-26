import "./styles.css";
import { useState } from "react";

var momosData = {
  Indore: [
    { name: "Sams Momos", rating: "4.5/5" },
    { name: "Shwarma Momos", rating: "4/5" },
    { name: "Shree Momos", rating: "4.8/5" }
  ],

  Delhi: [
    {
      name: "Dolma Aunty Momos",
      rating: "4.5/5"
    },
    {
      name: "Dilkhush Momos",
      rating: "4/5"
    },
    {
      name: " Bablue Chinese",
      rating: "3/5"
    }
  ],
  Pune: [
    {
      name: "Seven sisters",
      rating: "3/5"
    },
    {
      name: "Markes Momos",
      rating: "4/5"
    },
    {
      name: "Joshi Fast Food",
      rating: "4.5/5"
    }
  ]
};

export default function App() {
  const [userGenre, setuserGenre] = useState("Indore");
  function genreClickHandler(genre) {
    setuserGenre(genre);
  }

  return (
    <div className="App">
      <h1> Famous Momo Eateries </h1>
      {/* { Object.keys(bookDB).map(genre) => (
        <button onClick={() => genreClickHandler(genre)} >{genre}</button>
      )
     } */}
      <div>
        {Object.keys(momosData).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>

      <div className="container">
        <ul className="container-list" style={{ paddingInlineStart: "0" }}>
          {momosData[userGenre].map((momoShop) => (
            <li key={momoShop.name}>
              {" "}
              <div className="box-list">
                <div className="list-box"> {momoShop.name} </div>
                <div className="box-small"> {momoShop.rating} </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
