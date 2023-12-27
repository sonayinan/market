import React from 'react'
import Content from './Content'
import SideBarComp from './SideBarComp'
import "../style/main.scss"

const MainComp = ({urun,kategori, yeniUrunEkle, urunSil,setSecilen}) => {
  return (
    <div className='container'>
   <SideBarComp kategori={kategori} yeniUrunEkle={yeniUrunEkle} setSecilen={setSecilen}/>
   <Content urun={urun} urunSil={urunSil}/>
   
    </div>
  )
}

export default MainComp