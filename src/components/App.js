

import React from 'react'

import api from '../utils/api.js'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'

import { CurrentUserContext, defaultUserInfo } from '../contexts/CurrentUserContext';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({ name: "", link: "" });

  const [currentUser, setCurrentUser] = React.useState(defaultUserInfo);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
      .then((res) => {

        setCards(res)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  React.useEffect(() => {
    api.loadUserInfo()
      .then((res) => {

        setCurrentUser(res)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const handleCardLike=(card)=> {
    //console.log(api.changeLikeCardStatus)
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    }).catch((err) => {
      console.log(err);
    });
} 

const handleCardDelete = (card)=>{
    if (card.owner._id === currentUser._id){
        api.deleteCard(card._id)
        .then(() => {
          const cardsCopy = cards.filter(elem => elem._id !==card._id);
          setCards(cardsCopy)
        }
          )
        .catch((err) => {
          console.log(err);
        })
    }
    
    
}
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }

  const handleEditProfileClick = () => {
   // console.log('click')
    setIsEditProfilePopupOpen(true)
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({ name: "", link: "" })
  }

  const handleCardClick = (card) => {
    setSelectedCard(card)

  }

  

  const handleUpdateAvatar = (link) => {
    
    api.changeAvatar(link)
    .then(() => {
      setCurrentUser({...currentUser, avatar: link.avatar})
      setIsEditAvatarPopupOpen(false)
      //console.log(currentUser)
    })
    .catch((err) => {
      console.log(err);
    })
    
  }

  const handleUpdateUser = (data) => {
    api.editProfileINfo(data)
    .then(() => {
      setCurrentUser({...currentUser, name:data.name, about:data.about})
      setIsEditProfilePopupOpen(false)
    })
    .catch((err) => {
      console.log(err);
    });
    
  }

  const handleAddPlaceSubmit = (newCard) => {
    api.addNewCard(newCard)
    .then((res) => {
      
      setCards([res, ...cards]);
      //console.log(cards)
      setIsAddPlacePopupOpen(false)
    }
      
    )
    .catch((err) => {
      console.log(err);
    })
    
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">

        <div className="page">
          <Header />
          <Main cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
          <Footer />

          <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
          <AddPlacePopup  onSubmit={handleAddPlaceSubmit} onClose={closeAllPopups} isOpen={isAddPlacePopupOpen}/>
          <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} onSubmit={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
          <PopupWithForm buttonText="Да" onClose={closeAllPopups} isOpen={false} title="Вы уверены?" name="delete-card" />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
