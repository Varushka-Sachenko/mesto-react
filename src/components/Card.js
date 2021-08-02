import React from 'react'

function Card(props) {
    function handleClick() {
        
        props.onCardClick(props.cardsToAdd);
    }  
    
    return(
        <div className="element">
            <img className="element__image" alt="Изображение места" src={props.cardsToAdd.link} onClick={handleClick}/>
            <button className="element__delete-button"></button>
            <div className="element__info">
                <h2 className="element__title">{props.cardsToAdd.name}</h2>
                <div className="element__likes">
                    <button className="element__like-button"></button>
                    <p className="element__like-count">{props.cardsToAdd.likes.length}</p>
                </div>
            </div>

        </div>
    );
    
}

export default Card;