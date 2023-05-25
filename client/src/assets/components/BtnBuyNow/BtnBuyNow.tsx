import "./BtnBuyNow.css"

const BtnBuyNow = () => {

    function buyNow(){
        console.log("click"); //Byt ut detta till önskad funktionalitet. Typ att lägga in varorna i en object-array eller i databasen. 
        
    }

    return (
        <div className="btnbuynow" onClick={buyNow}>
            <p>Köp</p>
        </div>
    )
}
export default BtnBuyNow;