
import React from "react"
import Card from"./components/Card"
import Navbar from "./components/Navbar"
import data from "./data"

// export default function App(){
//   const places = data.map(item => {
//     return(
//       <Card 
//           key={item.id}
//           item={item}
//       />
//     )
//   })
//   return(
//     <div>
//       <Navbar />
//       <section className="places-list">
//         {places}
//       </section>
//     </div>
//   )
// }

export default function App(){
  return(
    <div>
      <Navbar/>
      
    </div>
  )

}
