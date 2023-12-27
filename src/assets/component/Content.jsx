import React from 'react'
import "../style/content.scss"
const Content = ({urun,urunSil}) => {
  return (
    <div className='urun'>
      <table>
        <thead>
          <tr>
            <th>Delete</th>
            <th>Product Name</th>
            <th>Quantity Per Unit</th>
            <th>Unit Price</th>
            <th>Unit In Stock</th>
          </tr>
        </thead>
        <tbody>
          {urun.map(kategori=>
          <tr key={kategori.id}>

            <td><button onClick={()=>urunSil(kategori.id)}>🗑️</button></td>
            <td>{kategori.productName}</td>
            <td>{kategori.quantityPerUnit}</td>
            <td>{kategori.unitPrice}</td>
            <td>{kategori.unitsInStock}</td>
          </tr>
       
            )}
            
          
        </tbody>
      </table>
    </div>
  )
}

export default Content