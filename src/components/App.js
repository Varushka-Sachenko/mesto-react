

import React from 'react'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {

  const [isEditProfilePopupOpen, openEditProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, openAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, openEditAvatarPopup] = React.useState(false);
  const [isPopupCLosed, closeAllPopups] = React.useState(true);

  const [selectedCard, openImagePopup ] = React.useState([]);

  

  const handleEditAvatarClick = () => {
    // const popupEditAvatar = new PopupWithForm('.popup_edit-avatar', () => { })
    // popupEditAvatar.open()
    openEditAvatarPopup(true)
    closeAllPopups(false)
  }

  const handleEditProfileClick = () => {
    // const popupEditProfile = new PopupWithForm('.popup_field_edit', () => { }
    // )
    // popupEditProfile.open()
    openEditProfilePopup(true)
    closeAllPopups(false)
  }

  const handleAddPlaceClick = () => {
    openAddPlacePopup(true)
    closeAllPopups(false)
  }

  const closePopups = () => {
    closeAllPopups(true)
    openAddPlacePopup(false)
    openEditProfilePopup(false)
    openEditAvatarPopup(false)
    openImagePopup([])
  }

  const handleCardClick = (card) => {
    openImagePopup(card)
    closeAllPopups(false)
  }
  return (
    <div className="App">

      <div className="page">
        <Header />
        <Main onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
        <Footer />

        <PopupWithForm onClosePopup={closePopups} onClose={isPopupCLosed} isOpen={isEditProfilePopupOpen} title="Редактировать профиль" name="field_edit" children={
          <>
            <input name="name" className="form__field-text form__field-text_input_name" placeholder="Имя" type="text"
              size="40" id="username" required minLength="2" maxLength="40" />
            <span id="username-error" className="username-error form__input-error"></span>

            <input name="info" className="form__field-text form__field-text_input_job" placeholder="Вид деятельности"
              type="text" size="40" id="status" required minLength="2" maxLength="200" />
            <span id="status-error" className="status-error form__input-error"></span>
          </>
        } />
        <PopupWithForm onClosePopup={closePopups} onClose={isPopupCLosed} isOpen={isAddPlacePopupOpen} title="Новое место" name="field_add" children={
          <>
            <input name="title" className="form__field-text form__field-text_input_title" placeholder="Название" type="text"
              size="40" id="nameplace" defaultValue="" required minLength="2" maxLength="30" />
            <span id="nameplace-error" className="nameplace-error form__input-error"></span>
            <input name="link" className="form__field-text form__field-text_input_link" placeholder="Ссылка на картинку"
              type="URL" size="40" id="linkplace" defaultValue="" required />
            <span id="linkplace-error" className="linkplace-error form__input-error"></span>
          </>
        } />
        <PopupWithForm onClosePopup={closePopups} onClose={isPopupCLosed} isOpen={isEditAvatarPopupOpen} title="Обновить аватар" name="edit-avatar" children={
          <>
            <input name="avatar" className="form__field-text form__field-text_input_avatar" placeholder="Ссылка на картинку" type="URL"
              size="40" defaultValue="" required />
          </>
        } />
        <PopupWithForm onClosePopup={closePopups} onClose={isPopupCLosed} isOpen={false} title="Вы уверены?" name="delete-card" children="" />
        <ImagePopup card={selectedCard} onClosePopup={closePopups} onClose={isPopupCLosed} />
      </div>
    </div>
  );
}

export default App;
