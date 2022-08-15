import React, {useState, useEffect} from "react";
import {StyleSheet, TextInput } from "react-native";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
let itemName;



var styles = StyleSheet.create({
    PlaceHolderText : {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'grey',
        borderColor: 'transparent',
        padding: '10%'   
    },
    SearchBarStyle : {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
        
    }
}) 

class SearchBar extends React.Component{
    constructor(props){
        super(props)
    };
    handleClick(){

    }
    render(){
    return(
        <div className="search" style={styles.SearchBarStyle}>
            <div className="searchInput">
            </div>
            <div className="dataResult">
            </div>
        </div>
    );
    }
}



export default SearchBar
