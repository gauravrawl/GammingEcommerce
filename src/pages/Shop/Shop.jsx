import { prod } from "../../items";
import Prdt from  "./Product"
import "./Shop.css"     

function Shop() {
  return (
    <>
      <div className="shop">
       <div className="shopTitle">
        <h1 style={{color: "rgb(30, 5, 89)"}}>GameZone</h1>
        <h6> .......... a gaming solution store ............</h6>
       </div>
       <div className="products">
      
        {prod.map((item) => ( <Prdt key={item.id} item={item} />
        ))}
        
       </div>
      </div>
    </>
  
  );
}

export default Shop;

