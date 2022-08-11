const productos = require('../data/productos')

module.exports = {
    index: (req, res) => {
        return res.render('index', {
            productos
        })
        },
     detalle: (req, res) => {
        const {id}=req.params;
        const producto = productos.find(producto => producto.id === +id)
        res.render("detalleMenu", {producto})
     }
    
}