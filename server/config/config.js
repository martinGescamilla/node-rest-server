// =======>Puerto
process.env.PORT = process.env.PORT || 3000;



// =====>Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//=======>Base de datos
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafe-usuario:martin1@ds133271.mlab.com:33271/cafeudemymartin'
}
process.env.URLDB = urlDB;