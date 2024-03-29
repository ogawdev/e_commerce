const { UsersGET, CreateAdminPATCH, UserDELETE, CategoriesGET, CategoriesPOST, CategoriesPATCH, CategoriesDELETE, ProductsGET, ProductPOST, ProductOptionPOST, ProductsFilterGET, ProductsDELETE, ProductsPATCH, ProductPATCH } = require("../Controllers/AdminController")
const AdminMiddleware = require("../middlewares/AdminMiddleware")
const router = require("express").Router()

router.get("/users", AdminMiddleware, UsersGET)
router.patch("/users/make-admin/:user_id", AdminMiddleware, CreateAdminPATCH)
router.delete("/users/delete/:user_id", AdminMiddleware, UserDELETE)

router.get("/categories", AdminMiddleware, CategoriesGET)
router.post("/categories/create", AdminMiddleware, CategoriesPOST)
router.patch("/categories/update/:category_id", AdminMiddleware, CategoriesPATCH)
router.delete("/categories/delete/:cattegory_id", AdminMiddleware, CategoriesDELETE)

router.get("/products", AdminMiddleware, ProductsGET)
router.post("/products/create/:category_id", AdminMiddleware, ProductPOST)
router.post("/products/option/:product_id", AdminMiddleware, ProductOptionPOST)
router.get("/products/filter", AdminMiddleware, ProductsFilterGET)
router.delete("/products/delete/:product_id", AdminMiddleware, ProductsDELETE)
router.patch("/products/update/:product_id", AdminMiddleware, ProductsPATCH)
router.patch("/products/type/:product_id", AdminMiddleware, ProductPATCH)

module.exports = {
    path: "/admin",
    router,
}

/*

    users - GET
    user - DELETE

    categories - GET
    products - GET

    category - GET POST PATCH DELETE
    product - GET POST PATCH DELETE

 */
