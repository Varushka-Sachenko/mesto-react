import React from 'react'
import { classApi as Api } from '../utils/Api'
import Card from './Card';

function Main(props) {
   // console.log('Main', props)
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");

    const [cards, getAllCards] = React.useState([]);

    const [statusVisible, changeStatus] = React.useState("");
    //console.log(Api)
    React.useEffect(() => {
        Api.loadUserInfo()
            .then((res) => {
                //console.log(res);
                setUserName(res.name);
                setUserDescription(res.about);
                setUserAvatar(res.avatar)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    React.useEffect(() => {
        Api.getInitialCards()
            .then((res) => {
                // console.log(res);
                getAllCards(res)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    const profileAvatarHover = () => {
        changeStatus("profile__avatar-overlay_visible")
        console.log(statusVisible)
    }
    const profileAvatarHoverNot = () => {
        changeStatus("")
        console.log(statusVisible)
    }

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-container" onClick={props.onEditAvatar} onMouseOver={profileAvatarHover} onMouseOver={profileAvatarHoverNot}>
                    <img className="profile__avatar" src={userAvatar} alt="Аватар" />
                    <div className={`profile__avatar-overlay ${statusVisible}`}></div>
                </div>

                <div className="profile__info">
                    <h1 className="profile__name" id="profile__name">{userName}</h1>
                    <button className="profile__edit-button-box" type="button" onClick={props.onEditProfile}></button>
                    <p className="profile__status" id="profile__status">{userDescription}</p>
                </div>
                <button className="profile__add-button-box" type="button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">

                {cards.map((element, index) => {
                   // console.log(props.onCardClick);
                   return(<Card key={index} cardsToAdd={element} onCardClick={props.onCardClick}/>) 
                })}


            </section>
    
        </main>
    );
}

export default Main;