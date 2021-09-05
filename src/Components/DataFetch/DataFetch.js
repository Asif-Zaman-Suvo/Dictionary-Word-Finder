import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserFavourite } from '../../App';
import Words from '../Words/Words';

const DataFetch = () => {

    const [definitions, setDefinitions] = useState([]);
    const { handleSubmit, register } = useForm();



    const getDefinition = (data) => {
        const searchWord = {
            word: data.word,
        };
        console.log(searchWord);

        var myHeaders = new Headers();
        myHeaders.append(
            "Authorization",
            "Token 77b968dd83f68a8dda74db76482885012260039a"
        );
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };
        fetch(
            `https://owlbot.info/api/v4/dictionary/${searchWord.word}`,
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {
                console.log(result.definitions);
                setDefinitions(result.definitions);
            })
            .catch((err => console.log("error", err)))
    }
    return (
        <div>
            <form className="mt-5 pt-5" style={{ textAlign: 'center' }} onSubmit={handleSubmit(getDefinition)}>
                <input className='searchTerm'
                    {...register("word")}
                    name="word"
                    id="word"
                    type="text"
                    placeholder="Search Your Word"
                />
                <input type="submit" className="searchButton" value="Search" />

            </form>{" "}

            <div style={{ marginLeft: "100px" }} className="row mt-5 pt-5">
                {
                    definitions.map(item => <Words key={item.key} item={item}></Words>)
                }
            </div>
        </div>
    );
};

export default DataFetch;