import React from 'react';
import Homepage from '../Homepage/Homepage';

const Favourite = () => {
    return (
        <section>
            <Homepage></Homepage>
            <select style={{marginLeft:'10%',marginTop:'5%'}}>
                <option>Noun</option>
                <option>Pronoun</option>
                <option>Adjective</option>
                <option>Verb</option>
                <option>Adverb</option>
                <option>Preposition</option>
                <option>Conjunction</option>
                <option>Interjection</option>
            </select>


           
        </section>
    );
};
export default Favourite;