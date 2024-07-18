import {readFileSync} from 'fs'
// import Product from '../entities/product.js'
import User from '../entities/user.js'

let user

// const loadProduct = (productType) => {
//     const data = readFileSync('data/products.json', 'utf8')
//     const productData = JSON.parse(data)[productType]
//     product = new Product(productData.name, productData.price, productData.url, productData.category, productData.subCategory)
//     return product
// }

const loadUsers = (userType) => {
    const data = readFileSync('data/users.json', 'utf8')
    const userData = JSON.parse(data)[userType]
    user = new User.Builder()
        .setEmail(userData.email)
        .setPassword(userData.password)
    return user
}

loadUsers('user1')

export {user}
