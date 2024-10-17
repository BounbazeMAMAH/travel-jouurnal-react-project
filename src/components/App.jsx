import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import data from "./data"

function App() {
  
  return(
    <div className="container">
      <Header />
    {data.map(item=>(
      <Main 
      link = {item.locate}
      id={item.id} 
      image={item.image}
      country= {item.country}
      title={item.title}
      date={item.date}
      description={item.description}
      />
    ))}
      
    <Footer />
    </div>
  )
}

export default App
