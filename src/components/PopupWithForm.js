//import Popup from "./Popup.js";

export default function PopupWithForm(props) {
	let statusOpened = ""
	//console.log(props)
	if (props.isOpen){
		statusOpened = "popup_opened"
		//console.log(statusOpened)
	} 
	if (!props.isOpen || props.onClose) {
		statusOpened = ""
		//console.log(statusOpened)
	}

	const closePopups = props.onClosePopup

	const closeEventListeners = (evt) => {
		if (evt.target.classList.contains('popup')) {
			closePopups()
		}
	}
	//console.log(statusOpened)
	return (
		<div className={`popup popup_${props.name} ${statusOpened}`} onClick={closeEventListeners} >
			<div className="popup__container">
				<button className="popup__close-button" onClick={closePopups} type="button"></button>
				<form className={`form form_${props.name}`} name="test" method="post">
					<h2 className="form__text">{props.title}</h2>
					{props.children}
					<button type="submit" className="form__save-button">Сохранить</button>
                </form>
            </div>
		</div>)
}



// export default class PopupWithForm extends Popup {
// 	constructor(popupSelector, handleFormSubmit) {
// 		super(popupSelector)
// 		this._handleFormSubmit = handleFormSubmit
// 		this._form = this._popupElement.querySelector('.form')
// 		this._inputs = this._form.querySelectorAll('.form__field-text')
// 		this._saveButton = this._popupElement.querySelector('.form__save-button')
// 	}

// 	_getInputValues() {
// 		const inputValues = {}
// 		this._inputs.forEach(input => {
// 			inputValues[input.name] = input.value
// 		})

// 		return inputValues
// 	}

// 	setEventListeners() {
// 		super.setEventListeners()
// 		this._form.addEventListener('submit', (evt) => {
// 			evt.preventDefault()
// 			//console.log(this._saveButton.textContent)
// 			this._saveButton.textContent = "Сохранение..."
// 			this._handleFormSubmit(this._getInputValues())
// 		})
// 	}

// 	close () {


// 		this._form.reset()
// 		this._saveButton.textContent = "Сохранить"
// 		//console.log(super.close)
// 		super.close()

// 	}
// }