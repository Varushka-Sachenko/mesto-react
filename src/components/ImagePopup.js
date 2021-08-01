export default function ImagePopup(props) {
    //console.log(props)
    let statusOpened = ""
	//console.log(props.card)
	//console.log(props.card.length !== 0)
	if (!props.onClose && props.card.length !== 0){
		statusOpened = "popup_opened"
		//console.log(statusOpened)
	} 
	else {
		statusOpened = ""
		//console.log(statusOpened)
	}
	//console.log(statusOpened)
	const closePopups = props.onClosePopup

	const closeEventListeners = (evt) => {
		if (evt.target.classList.contains('popup')) {
			closePopups()
		}
	}
    return (
        <>
            <div className={`popup image-popup ${statusOpened}`} onClick={closeEventListeners}>
                <div className="popup__container">
                    <img className="image-popup__image" alt={props.card.name} src={props.card.link} />
                    <button className="popup__close-button"></button>
                    <h3 className="image-popup__title">{props.card.name}</h3>
                </div>
            </div>
        </>
    )
}