const DB = require('../utils/db.js')
module.exports = {
  list: async ctx => {
    ctx.state.data = await DB.query("SELECT * FROM product;")
  },
  detail: async ctx => {
    productID = + ctx.params.id
    if(!isNaN(productID)){
      product = await DB.query("SELECT * FROM product where product.id=?", [productID])
      ctx.state.data = product[0]
    }else{
      ctx.state.data = {}
    }
  }
}