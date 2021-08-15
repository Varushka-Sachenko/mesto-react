import React from 'react'

import PopupWithForm from './PopupWithForm';
//import { CurrentUserContext} from '../contexts/CurrentUserContext';


export default function EditAvatarPopup (props){
   // const currentUser = React.useContext(CurrentUserContext);

    const avatarRef = React.useRef();

    function handleSubmit() {
      //e.preventDefault();
    
      props.onUpdateAvatar({
        avatar: avatarRef.current,
      });
    } 
    return (
        <PopupWithForm buttonText="Сохранить" onSubmit={handleSubmit} onClose={props.onClose} isOpen={props.isOpen} title="Обновить аватар" name="edit-avatar" children={
            <>
              <input name="avatar" ref={avatarRef} className="form__field-text form__field-text_input_avatar" placeholder="Ссылка на картинку" type="URL"
                size="40" defaultValue="" required />
            </>
          } />
    )

}