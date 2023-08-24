import React from 'react'
import { useSelector } from 'react-redux'



export default function CarValue() {
    const totalCost = useSelector(({cars: {data, searchTerm}}) => {
        return data.filter((element) => element.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .reduce((acc,element) => acc + element.cost, 0)
    })
    return (
    <div style={{
        width:"50%",
        textAlign:"right",
        margin:"20px 20px",
        paddingRight:"0px",
        background:"#222",
        color:"white",
        height:"7vh",
        lineHeight:"7vh"
    }}>
        Total Cost {totalCost}</div>
  )
}
