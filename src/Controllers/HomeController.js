const catigories = require("../models/CategoryModel")
const products = require("../models/ProductModel")

module.exports = async (req, res) => {
    try {
        let categoryList = await catigories.find()
        let recProducts = await products.find({
            is_rec: true,
        })
        let bestSellers = await products.find({
            is_best: true,
        })

        let randomRec = []

        while (randomRec.length < 13 && recProducts.length > 0) {
            let randomNumber = Math.round(Math.random() * recProducts.length - 1)
            let product = recProducts.pop(randomNumber)
            randomRec.push(product)
        }
        
        let randomBest = []

        while (randomBest.length < 13 && bestSellers.length > 0) {
            let randomNumber = Math.round(Math.random() * bestSellers.length - 1)
            let product = bestSellers.pop(randomNumber)
            randomBest.push(product)
        }

        

        res.status(200).json({
            ok: true,
            catigories: categoryList,
            recProducts: randomRec,
            bestSellers: randomBest,
        })

    } catch(e) {
        res.status(400).josn({
            ok: false,
            message: e + "",
        })
    }
}