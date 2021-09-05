import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { UserFavourite } from '../../App';
import './Words.css';

const Words = ({item}) => {
    // const { image_url, definition, type, example, emoji } = props.item

    const [favourites,setFavourites]=useContext(UserFavourite);
   
    // console.log(favourites);

    const handleAddFavourite=(item)=>{
        setFavourites([...favourites,item])
        localStorage.setItem('favourites',JSON.stringify(favourites));
       
       
    }

    return (
        <div className='col-md-4 mt-5'>

            <Card className="wordCard" style={{ width: '20em', height: 'auto', backgroundColor: '#8ACAE7' }}>
                <Card.Img variant="top" src={item.image_url} />
                <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title>
                        <h2 style={{ color: '#F43F1A' }}>Definition:<span style={{ color: '#8B0A50' }}>{item.definition}</span></h2>
                    </Card.Title>
                    <Card.Text>
                        <h6 style={{ color: 'red' }}>Type : <span style={{ color: 'Green' }}>{item.type}</span></h6>
                        <h6 style={{ color: 'blue' }}>Example : <span style={{ color: 'brown' }}>{item.example}</span></h6>
                        <p style={{ color: '#280137' }}>Emoji : {item.emoji}</p>
                    </Card.Text>

                    <button onClick={()=>handleAddFavourite(item)} type="button" className="btn btn-success">Add To Favourite</button>

                    {/* onClick={() => props.handleAddFavourite(props.item)} */}
                </Card.Body>
            </Card>


        </div>

    );
};

export default Words;