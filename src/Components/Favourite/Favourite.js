import { useContext } from 'react';
import { UserFavourite } from '../../App';
import FavouriteWord from '../FavouriteWord/FavouriteWord';
import Homepage from '../Homepage/Homepage';

const Favourite = () => {

    const [favourites, setFavourites] = useContext(UserFavourite);
    console.log('add to favorites', favourites);


    return (
        <section>

            <Homepage></Homepage>
            <select style={{ marginLeft: '10%', marginTop: '5%' }}>
                <option>Noun</option>
                <option>Pronoun</option>
                <option>Adjective</option>
                <option>Verb</option>
                <option>Adverb</option>
                <option>Preposition</option>
                <option>Conjunction</option>
                <option>Interjection</option>
            </select>

            <div style={{ marginLeft: "100px" }} className="row mt-5 pt-5">
                {
                    favourites.map(item => <FavouriteWord key={item.key} item={item}></FavouriteWord>)
                }
            </div>
           
        </section>
    );
};
export default Favourite;