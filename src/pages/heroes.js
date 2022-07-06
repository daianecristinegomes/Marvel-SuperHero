import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header/header";
import Search from "../components/Search/search";
import "./heroes.css"

const Heroes = () => {

    const [search, setSearch] = useState();

    let url
    let nameHero

    if (window.location !== undefined) {
        url = window.location.href;
        nameHero = url.split("name=")[1];
    }

    console.log(window.location, 'window')

    useEffect(() => {
        axios
            .get(
                `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${nameHero}&ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`,
                {
                    headers: {},
                }
            )
            .then((preview) => {
                setSearch(preview.data.data.results);
            });
    }, []);

    console.log(search, "search");
    return (
        <div className="">
            <Header/>
            {search && (
                <div className="all-heroes">
                    <div
                        className="hero-title d-flex flex-column align-items-center"
                        style={{ width: "100%" }}
                    >
                        <a href="/" className="title-heroes" >
                            MY SUPER HERO
                        </a>
                    </div>
                    <>
                        {search.map((hero) => {
                            return (
                                <a
                                    href={`/hero?id=${hero.id}`}
                                    className="my-heroes"
                                >
                                    <p className="">{hero.name}</p>
                                    <img
                                        className="thumbnail-hero"
                                        src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                                    />
                                </a>
                            );
                        })}
                    </>
                </div>
            )}
        </div>


    );
};

export default Heroes;


