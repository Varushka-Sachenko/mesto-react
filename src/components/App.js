

import React from 'react'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard ] = React.useState({name:"", link:""});

  

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({name:"", link:""})
  }

  const handleCardClick = (card) => {
    setSelectedCard(card)
  }
  return (
    <div className="App">

      <div className="page">
        <Header />
        <Main onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
        <Footer />

        <PopupWithForm buttonText="Сохранить" onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} title="Редактировать профиль" name="field_edit" children={
          <>
            <input name="name" className="form__field-text form__field-text_input_name" placeholder="Имя" type="text"
              size="40" id="username" required minLength="2" maxLength="40" />
            <span id="username-error" className="username-error form__input-error"></span>

            <input name="info" className="form__field-text form__field-text_input_job" placeholder="Вид деятельности"
              type="text" size="40" id="status" required minLength="2" maxLength="200" />
            <span id="status-error" className="status-error form__input-error"></span>
          </>
        } />
        <PopupWithForm buttonText="Создать"  onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} title="Новое место" name="field_add" children={
          <>
            <input name="title" className="form__field-text form__field-text_input_title" placeholder="Название" type="text"
              size="40" id="nameplace" defaultValue="" required minLength="2" maxLength="30" />
            <span id="nameplace-error" className="nameplace-error form__input-error"></span>
            <input name="link" className="form__field-text form__field-text_input_link" placeholder="Ссылка на картинку"
              type="URL" size="40" id="linkplace" defaultValue="" required />
            <span id="linkplace-error" className="linkplace-error form__input-error"></span>
          </>
        } />
        <PopupWithForm buttonText="Сохранить"  onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} title="Обновить аватар" name="edit-avatar" children={
          <>
            <input name="avatar" className="form__field-text form__field-text_input_avatar" placeholder="Ссылка на картинку" type="URL"
              size="40" defaultValue="" required />
          </>
        } />
        <PopupWithForm buttonText="Да" onClose={closeAllPopups} isOpen={false} title="Вы уверены?" name="delete-card" children="" />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
