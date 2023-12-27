import React from 'react'
import "../style/navi.scss"
import logo from "../img/ay.png"
const Navi = ({ secilen }) => {
  const sec = ["productName", "quantityPerUnit", "unitPrice", "unitsInStock"]
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>Moon Store</span>
      </div>

      
        <p>Ürün Kategorisi: {secilen}</p>
      

    </nav>
  )
}

export default Navi