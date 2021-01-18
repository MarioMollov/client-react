import Product from "../components/product/Product";

const Products = (props) => {
    
    const productList = [
        {
            title: 'Product 00562',
            image: 'https://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2.jpg',
            description: 'An awesome product'
        },
        {
            title: 'Product 00563',
            image: 'https://lh3.googleusercontent.com/DaeHJ1cE8YmvDBsBfBOxacn27nsLy35yHgxW41xMHbQbgmCrEd6GAMYWBY9ucReiZDyh6hHJOFQ6RDFx3ByAX0G40D56DDMsDzlZLQ=w262-l90-sg-rj',
            description: 'Another awesome product'
        },
    ]

    const getProducts = () => {

        const products=productList.map((product, index) => {
            return <Product 
                key = {index}
                title = {product.title}
                image = {product.image}
                description = {product.description}
            />
        })
        return products
    }

    return <>
    <div className='container'>
        <div className='row'>
            {getProducts()}
        </div>
    </div>
    </>
}

export default Products;