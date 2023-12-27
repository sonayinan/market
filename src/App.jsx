import Navi from "../../market/src/assets/component/Navi"
import MainComp from "../../market/src/assets/component/MainComp"
import { useState } from "react"
import { data } from "./data/data"
data
function App() {
 const [urun, setUrun]=useState(data.products)
 const [kategori, setKategori]=useState(data.categories)
 const yeniUrunEkle=(yeniUrun)=>{
  setUrun([...urun,yeniUrun])
 }
 const urunSil=(id)=>{
  setUrun(urun.filter(statedenGelen=>statedenGelen.id!==id))
 }
 const[secilen,setSecilen]=useState("")

  return (
    <>
      <Navi secilen={secilen}/>
      <MainComp  urunSil={urunSil} urun={urun} kategori={kategori} yeniUrunEkle={yeniUrunEkle} setSecilen={setSecilen}/>
      
    </>
  )
}

export default App
