


function ProductCard({product}) { //{product} innanför paranteserna sen. 

    return (
        <div className="productcard">
            <img src={product.image} height={200}/>

            <div className="ProductCardInfo">
                <h3>{product.title}</h3>
            </div>
            
        </div>
    )
}
export default ProductCard;