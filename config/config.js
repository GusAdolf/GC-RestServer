//*************************************** */
//PUERTO

//******************************** */

process.env.PORT = process.env.PORT || 3000;

//************************* */
//BASE DE DATOS
//***************** */

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/coffe';
} else {
    urlDB = 'mongodb+srv://gcontreras:12345@doraemon.oxxth.mongodb.net/test';
}

process.env.URLDB = urlDB;