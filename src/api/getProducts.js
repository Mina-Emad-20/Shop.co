export const getProducts = (setProducts) => fetch('http://localhost:3000/products').then(res => res.json()).then(res => setProducts(res))

export const getSingleProduct = (setProduct, id) => fetch('http://localhost:3000/products/' + id).then(res => res.json()).then(res => setProduct(res))

export const ratingReviews = (setReviews) => fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(res => setReviews(res))