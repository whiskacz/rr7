import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { removeCar } from '../store';

export default function CarList() {
    const cars = useSelector(({ cars : { data, searchTerm }}) => {
        
        
        return data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
    })

    const dispatch = useDispatch()

    const handleRemoveCar = (element) => {
        dispatch(removeCar(element.id))
    }

  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        alignItems:"center",
        width:"50%",
        minHeight:"5vh",
        background:"#eee",
        borderBottom:"2px solid black"
    }}>
        {cars.map((element) => {
            return (
            <div
                key={element.id}
                style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-around",
                alignItems:"center",
                width:"100%",
                
            }}>
                <div>
                    {element.name}
                </div>
                <div>
                    {element.cost} $
                </div>
                <button 
                onClick={() => handleRemoveCar(element)}
                style={{
                    width:"100px",
                    height:"40px"
                }}>
                    DELETE</button>
            </div>
        )})}
    </div>
  )
}
