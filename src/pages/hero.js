import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "../components/Header/header";
import "./hero.css"
import Search from "../components/Search/search";

const Hero = () => {

    const [search, setSearch] = useState();

    let url;
    let idHero;
  
    if (typeof window !== "undefined") {
      url = window.location.href;
      idHero = url.split("id=")[1];
    }
  
    useEffect(() => {
      axios
        .get(
          `https://gateway.marvel.com:443/v1/public/characters/${idHero}?ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`,
          {
            headers: {},
          }
        )
        .then((preview) => {
          setSearch(preview.data.data.results);
        });
    }, []);
  

    return (
        <div className="">
            <Header/>
            {search && (
        <div className="">
          <div
            className=""
            style={{ width: "100%" }}
          >
            <a href="/" className="title-heroes">
              MY SUPER HERO
            </a>
          </div>
          <>
            {search.map((hero) => {
              return (
                <div className="box-hero">
                  <div
                    className="info-heroes"
                    style={{ backgroundColor: "#000" }}
                  >
                    <img
                      className="thumbnail-hero-info"
                      src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                    />
                    <div className="info-box" style={{ width: "100%" }}>
                      <h1 className="text-title">{hero.name}</h1>
                      {hero.description && (
                        <p className="text-info">
                          Descrição: {hero.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="details-hero">
                    {hero.comics.returned !== 0 && (
                      <div>
                        <h3>Comics</h3>
                        <ul>
                          {hero.comics.items.map((comic) => {
                            return (
                              <li className="">{comic.name}</li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                    {hero.events.returned !== 0 && (
                      <div>
                        <h3>Eventos</h3>
                        <ul>
                          {hero.events.items.map((event) => {
                            return (
                              <li className="">{event.name}</li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                    {hero.series.returned !== 0 && (
                      <div>
                        <h3>Series</h3>
                        <ul>
                          {hero.series.items.map((serie) => {
                            return (
                              <li className="">{serie.name}</li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                    {hero.stories.returned !== 0 && (
                      <div>
                        <h3>Histórias</h3>
                        <ul>
                          {hero.stories.items.map((storie) => {
                            return (
                              <li className="">{storie.name}</li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </>
        </div>
      )}
    </div>
  );
};        

export default Hero;
