export const saveLastInterestProduct = (productName) =>{
    //API DE LocalStorage o SesionStorage
    // localStorage.setItem('lastProduct', productName)   comento esto porque sólo quiero que se muestre el mensaje mientras el usuario está en la página después de seleccionar un producto, no siempre que entre.
    // sessionStorage.setItem('lastSessionProduct', productName)
    sessionStorage.setItem('lastProduct', productName)

}