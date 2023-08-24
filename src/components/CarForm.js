import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from '../store';

export default function CarForm() {

    const dispatch = useDispatch()    
    const { name, cost } = useSelector((state) => {
        return {
            name : state.form.name,
            cost : state.form.cost
}})

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addCar( { name, cost }))
    }

    const handleChangeName = (event) => {
        dispatch(changeName(event.target.value))
       
    }

    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0
        dispatch(changeCost(carCost))
    }

  return (
    <form style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        width:"50%",
        height:"10vh",
        background:"#eee",
        borderBottom:"2px solid black"
    }}
        onSubmit={handleSubmit}
    
    >
        <div style={{
            display:"flex",
            flexDirection:"column"}}>
            
            <label>
            Car name  
            </label>    
            
            <input 
                type="text" 
                placeholder='car name...'
                value={name}
                oncChange={handleChangeName}
                />
        </div>
        
        <div style={{
            display:"flex",
            flexDirection:"column"}}>
            <label>
            Car value  
            </label>
            <input 
                type="number" 
                placeholder='insert value...' 
                value={cost}
                onChange={handleCostChange} 
                />
        </div>        
        
        <button style={{
            width:"100px",
            height:"40px"
        }}>
            Submit
        </button>
    </form>
  )
}


