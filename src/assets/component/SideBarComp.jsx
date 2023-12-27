import React, { useState } from 'react'
import "../style/sidebar.scss"
const SideBarComp = ({kategori,yeniUrunEkle,setSecilen}) => {
  const [productName, setProductName] = useState("");
  const [quantityPerUnit, setQuantityPerUnit] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [unitsInStock, setUnitsInStock] = useState("");
  const [categoryId,setCategoryId]=useState("-------")
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    yeniUrunEkle({
      // id:urunler[urunler.length-1]===undefined?1:urunler[urunler.length-1].id+1,
      id:50000,
      productName:productName,
      quantityPerUnit: quantityPerUnit,
      unitPrice:unitPrice,
      unitsInStock: unitsInStock,
      categoryId:categoryId
    })
    setProductName("")
    setQuantityPerUnit("")
    setUnitPrice("")
    setUnitsInStock("")
    setCategoryId("-------")
    console.log();
  }
 
  return (
    <div className='sidebar'>
      <ul>
        {kategori.map(urun=>
          <li onClick={(e)=>setSecilen(e.target.innerText)} key={urun.id}>{urun.categoryName}</li>
          )}
        
      </ul>
     
      <form onSubmit={handleSubmit}>
        <p>Ürün ekle</p>
        <input type="text" value={productName} onChange={e => setProductName(e.target.value)}  placeholder='productName' />
        <input type="text" value={quantityPerUnit} onChange={e => setQuantityPerUnit(e.target.value)}  placeholder='quantityPerUnit' />
        <input type="number" value={unitPrice} onChange={e => setUnitPrice(e.target.value)}  placeholder='unitPrice' />
        <input type="number" value={unitsInStock} onChange={e => setUnitsInStock(e.target.value)}  placeholder='unitsInStock' />
        <select  value={categoryId} onChange={e => setCategoryId(e.target.value)}>
          <option>-------</option>
          <option value="1">Beverages</option>
          <option value="2">Condiments</option>
          <option value="3">Confections</option>
          <option value="4">Dairy Products</option>
          <option value="5">Grains/Cereals</option>
          <option value="6">Meat/Poultry</option>
          <option value="7">Produce</option>
          <option value="8">Seafood</option>
        </select>
        <input  disabled={productName===""||quantityPerUnit===""||unitPrice===""||unitsInStock===""|| categoryId==="-------"}  type="submit"  value={"ekle"} />

      </form>

    </div>
  )
}

export default SideBarComp