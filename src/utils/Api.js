



class Api {

  constructor({adress, token}){
      this.adress = adress
      this._token = token
  }
  _checkResult(res){
    if (res.ok) {
      // const k = res.json()
      // console.log(k)
      return res
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _changeToJson(res){
    return res.json()
  }

  getInitialCards() {
    //console.log('checkapi')
      return fetch(this.adress, {
        headers: {
          authorization: this._token
        }
      })
        .then(res => {
          return this._checkResult(res)
        })
        .then(res =>{
          return this._changeToJson(res)
        })
        
  }

  loadUserInfo(){
    return fetch('https://nomoreparties.co/v1/cohort-24/users/me', {
        headers: {
        authorization: this._token
      }
    }) 
    .then(res => {
      return this._checkResult(res)
      // console.log(res)
    })
    .then(res =>{
      return this._changeToJson(res)
    })
    
      
  }

  editProfileINfo(data){
      //console.log(data)
      return fetch('https://mesto.nomoreparties.co/v1/cohort-24/users/me', {
      method: 'PATCH',
      headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name: data.name,
          about: data.info,
      })
      })
      .then(res => {
        return this._checkResult(res)
      })
      .then(res =>{
        return this._changeToJson(res)
      })
  }

  addNewCard(data){
      return fetch('https://mesto.nomoreparties.co/v1/cohort-24/cards', {
      method: 'POST',
      headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name: data.title,
          link: data.link,
      })
      })
      .then(res => {
        return this._checkResult(res)
      })
      .then(res =>{
        return this._changeToJson(res)
      })
      
  }

  deleteCard(cardId){
     return fetch(`https://mesto.nomoreparties.co/v1/cohort-24/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
          // 'Content-Type': 'application/json'
      },
    })
    .then(res => {
      
      return this._checkResult(res)
    })
    .then(res =>{
      return this._changeToJson(res)
    })
    
  }


  likeCard(cardId){
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-24/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
    },
    })
    .then(res => {
      return this._checkResult(res)
    })
    .then(res =>{
      return this._changeToJson(res)
    })
  }

  unlikeCard(cardId){
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-24/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
    },})
    .then(res => {
      // console.log(this._token)
     return this._checkResult(res)
    })
    .then(res =>{
      return this._changeToJson(res)
    })

  }    

  changeAvatar(link){
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-24/users/me/avatar`, {
    method: 'PATCH',
    headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: link,
    })
    })
    .then(res => {
      // console.log(res)
      return this._checkResult(res)
    })
    .then(res =>{
      return this._changeToJson(res)
    })

  }
}

const classApi = new Api ({
  adress: 'https://mesto.nomoreparties.co/v1/cohort-24/cards',
  token: 'a94d4dc8-3936-43d8-a3b5-2773303eb737'
})

export {classApi} 
// export default class Api extends React.Component {


//   constructor(props) {
//     super(props);
//     this.state = {
//       adress: props.adress,
//       token: props.token
//     }

//   }
//   checkResult = (res) => {
//     if (res.ok) {
//       // const k = res.json()
//       // console.log(k)
//       return res
//     }
//     // если ошибка, отклоняем промис
//     return Promise.reject(`Ошибка: ${res.status}`);
//   }

//   changeToJson = (res) => {
//     return res.json()
//   }

//   getInitialCards = () => {
//     return fetch(this.state.adress, {
//       headers: {
//         authorization: this.state.token
//       }
//     })
//       .then(res => {
//         return this.checkResult(res)
//       })
//       .then(res => {
//         return this.changeToJson(res)
//       })

//   }

//   loadUserInfo = () => {
//     return fetch('https://nomoreparties.co/v1/cohort-24/users/me', {
//       headers: {
//         authorization: this._token
//       }
//     })
//       .then(res => {
//         return this.checkResult(res)
//         // console.log(res)
//       })
//       .then(res => {
//         return this.changeToJson(res)
//       })


//   }

//   editProfileINfo = (data) => {
//     //console.log(data)
//     return fetch('https://mesto.nomoreparties.co/v1/cohort-24/users/me', {
//       method: 'PATCH',
//       headers: {
//         authorization: this.state.token,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         name: data.name,
//         about: data.info,
//       })
//     })
//       .then(res => {
//         return this.checkResult(res)
//       })
//       .then(res => {
//         return this.changeToJson(res)
//       })
//   }

//   addNewCard = (data) => {
//     return fetch('https://mesto.nomoreparties.co/v1/cohort-24/cards', {
//       method: 'POST',
//       headers: {
//         authorization: this.state.token,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         name: data.title,
//         link: data.link,
//       })
//     })
//       .then(res => {
//         return this.checkResult(res)
//       })
//       .then(res => {
//         return this.changeToJson(res)
//       })

//   }

//   deleteCard = (cardId) => {
//     return fetch(`https://mesto.nomoreparties.co/v1/cohort-24/cards/${cardId}`, {
//       method: 'DELETE',
//       headers: {
//         authorization: this.state.token,
//         // 'Content-Type': 'application/json'
//       },
//     })
//       .then(res => {

//         return this.checkResult(res)
//       })
//       .then(res => {
//         return this.changeToJson(res)
//       })

//   }


//   likeCard = (cardId) => {
//     return fetch(`https://mesto.nomoreparties.co/v1/cohort-24/cards/likes/${cardId}`, {
//       method: 'PUT',
//       headers: {
//         authorization: this.state.token,
//         'Content-Type': 'application/json'
//       },
//     })
//       .then(res => {
//         return this.checkResult(res)
//       })
//       .then(res => {
//         return this.changeToJson(res)
//       })
//   }

//   unlikeCard = (cardId) => {
//     return fetch(`https://mesto.nomoreparties.co/v1/cohort-24/cards/likes/${cardId}`, {
//       method: 'DELETE',
//       headers: {
//         authorization: this.state.token,
//         'Content-Type': 'application/json'
//       },
//     })
//       .then(res => {
//         // console.log(this._token)
//         return this.checkResult(res)
//       })
//       .then(res => {
//         return this.changeToJson(res)
//       })

//   }

//   changeAvatar = (link) => {
//     return fetch(`https://mesto.nomoreparties.co/v1/cohort-24/users/me/avatar`, {
//       method: 'PATCH',
//       headers: {
//         authorization: this.state.token,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         avatar: link,
//       })
//     })
//       .then(res => {
//         // console.log(res)
//         return this.checkResult(res)
//       })
//       .then(res => {
//         return this.changeToJson(res)
//       })

//   }
// }