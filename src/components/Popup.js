export default class Popup {
    constructor (popupSelector){
        this._popupElement = document.querySelector(popupSelector) 
        this._handleEscClose = this._handleEscClose.bind(this)
    }
    open(){
        
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keyup', this._handleEscClose);
    }

    close (){
        //console.log('close')
        this._popupElement.classList.remove('popup_opened');
        //popupName.removeEventListener('click',  checkPopup);
        document.removeEventListener('keyup', this._handleEscClose);
    }

    _handleEscClose(e){
        
        if (e.key === "Escape") {
            // popupName = document.querySelector('.popup_opened')
        
            this.close()
        }

    }

    setEventListeners(){
        this._popupElement.querySelector('.popup__close-button').addEventListener('mousedown', (evt) => {
			this.close()
		})
        this._popupElement.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup')) { 
				this.close() 
			}
        })
    }
}