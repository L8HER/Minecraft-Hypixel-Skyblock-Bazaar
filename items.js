import React, { useState, useEffect } from 'react';

var name =[]
var test = []
var temp;
class Items extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            item: [],
            error : false
        }
    }

    componentDidMount() {
        fetch("https://api.slothpixel.me/api/skyblock/bazaar/")
            .then(res => res.json())
            .then(
                (result)=>{
                    this.setState({
                        item: result
                    });
                    for(var i in result){
                        name.push(i)
                    }
                    name.map(ID => test.push({
                        "ID": ID.toString()
                    }))
                },
                (errors)=>{
                    this.setState({error:true})
                }
            )
            return name;
    }

    render(){
        var itemList = this.state.item;
        var names = test.map(function(test){
            return test['ID']
        });
        for (var i in names){
            if(names[i].indexOf('ENCHANTED')>-1){
                names[i]='';
            }
        }
        names=names.filter(function(el){return el;});
        console.log(names);
        if(itemList && test.length>0){
            console.log(itemList)
            return (<div>
                    <th>Item Name</th>
                    <th>Item Buy Price</th>
                    <th>Enchanted Item Name</th>
                    <th>Profit</th>
                    {names.map(i=>(
                        <tr key={i}>
                            {itemList[i].name&&itemList[i].related.length&&(itemList[itemList[i].related[0]].buy_summary[0].pricePerUnit-(itemList[i].sell_summary[0].pricePerUnit*160)>0)?<th>{itemList[i].name}</th>:null}
                            {itemList[i].name&&itemList[i].sell_summary.length&&itemList[i].related.length&&(itemList[itemList[i].related[0]].buy_summary[0].pricePerUnit-(itemList[i].sell_summary[0].pricePerUnit*160)>0)?<th>{itemList[i].sell_summary[0].pricePerUnit}</th>:null}
                            {itemList[i].name&&itemList[i].related.length&&(itemList[itemList[i].related[0]].buy_summary[0].pricePerUnit-(itemList[i].sell_summary[0].pricePerUnit*160)>0)?<th>{itemList[itemList[i].related[0]].name}</th>:null}
                            {itemList[i].name&&itemList[i].related.length&&(itemList[itemList[i].related[0]].buy_summary[0].pricePerUnit-(itemList[i].sell_summary[0].pricePerUnit*160)>0)?<th>{itemList[itemList[i].related[0]].buy_summary[0].pricePerUnit-(itemList[i].sell_summary[0].pricePerUnit*160)}</th>:null}
                        </tr>
                    ))}
            </div>)
        }
    }
}

export default Items
   