export default class UserInfo {
    constructor (nameSelector, infoSelector, avatarSelector){
        this._nameSelector = nameSelector
        this._infoSelector = infoSelector
        // this._avatarLink = avatarLink
        this._nameElement = document.querySelector(nameSelector);
        this._infoElement = document.querySelector(infoSelector);
        this._avatarElement = document.querySelector(avatarSelector);
    }

    getUserInfo (){
        //console.log(this._nameSelector)
        
        const userData = {
            name: this._nameElement.textContent,
            info: this._infoElement.textContent
        }
        //console.log(userData)
        return (userData)
    }

    setNewAvatar(link){
        //console.log(this._avatarElement)
        this._avatarElement.src = link
    }

    setUserInfo (userData){
        //console.log(document.querySelector('.profile__name'))
        this._nameElement.textContent = userData.name;
        this._infoElement.textContent  = userData.about;
    }
}