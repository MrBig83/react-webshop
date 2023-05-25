import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./SingleProduct.css"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";


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
            <Breadcrumbs />
            <div className="title">
                <img src={product.image} height={500}/>
            </div>
            <div className="info">
                <h3>{product.title}</h3>
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