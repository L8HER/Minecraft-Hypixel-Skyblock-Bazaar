import React from "react";

const websiteTitle = {
    display : "flex",
    alignItems : "center", 
    justifyContent : "center",
    color : "#00c4ff"
}


function TitleCard(){
  return(
        document.body.style.backgroundColor = 'grey',
        <h1 style= {websiteTitle}>
                    Bazaar Enchented Material Flip
        </h1>
  );
  }

export default TitleCard