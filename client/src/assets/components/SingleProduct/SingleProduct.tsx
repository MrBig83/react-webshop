import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./SingleProduct.css"


const SingleProduct = () => {   
        const [product, setProduct] = useState([]);
        const { id } = useParams();
    
        useEffect(() => {
            const fetchProduct = async () => {
                const response = await fetch(`http://localhost:3000/api/products/${id}`)
                const data = await response.json()                
                setProduct(data) 
            }
            fetchProduct()
        }, [product]) //============== Saknar ID! ================

    return (
        <div className="SingleProduct">
            <div>
                <h3>{product.title}</h3>
                <img src={product.image} height={500}/>
            </div>
            <div className="info">
                <p>{product.description}</p>
                <p>{product.price} :-</p>
                <button>Köp nu</button>
            </div>
            <br />
            <br />
            <Link to={`/`}>Tillbaka till huvudsidan</Link>
        </div>
    )
}
export default SingleProduct;