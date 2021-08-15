import React from 'react'
import { classApi as api } from '../utils/aaapi'
import Card from './Card';

import { CurrentUserContext} from '../contexts/CurrentUserContext';

function Main(props) {

    const currentUser = React.useContext(CurrentUserContext);
    //console.log(currentUser)
    

    const [statusVisible, changeStatus] = React.useState("");

    // const [currentUser.name, changeName] = React.useState("");
    // const [currentUser.avatar, changeAvatar] = React.useState("");
    // const [currentUser.about, changeAbout] = React.useState("");
    
    React.useEffect(() => {
        api.loadUserInfo()
            .then((res) => {
                // changeName(res.name)
                // changeAvatar(res.avatar)
                // changeAbout(res.about)
                
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

   
    const profileAvatarHover = () => {
        changeStatus("profile__avatar-overlay_visible")
        
    }
    const profileAvatarHoverNot = () => {
        changeStatus("")
       
    }

    

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-container" onClick={props.onEditAvatar} onMouseOver={profileAvatarHover} onMouseOut={profileAvatarHoverNot}>
                    <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
                    <div className={`profile__avatar-overlay ${statusVisible}`}></div>
                </div>

                <div className="profile__info">
                    <h1 className="profile__name" id="profile__name">{currentUser.name}</h1>
                    <button className="profile__edit-button-box" type="button" onClick={props.onEditProfile}></button>
                    <p className="profile__status" id="profile__status">{currentUser.about}</p>
                </div>
                <button className="profile__add-button-box" type="button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">

                {props.cards.map((element) => {
                   
                   return(<Card key={element._id} onCardDelete ={props.onCardDelete} cardsToAdd={element} onCardClick={props.onCardClick} onCardLike={props.onCardLike}/>) 
                })}


            </section>
    
        </main>
    );
}

export default Main;