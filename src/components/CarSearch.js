import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSearchTerm } from '../store'


export default function CarSearch() {
    
    const dispatch = useDispatch()
    const searchTerm = useSelector((state) => {
        return state.cars.searchTerm
    })
    
    const handleSearchTermChange = (event) => {
        dispatch(changeSearchTerm(event.target.value))
    }
  
    return (
    <div style={{
        background:"#888",
        width:"50%",
        height:"5vh",
        margin:"20px",
        color:"white",
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center",
        gap:"20px"
    }}>
        <label >Search </label>
        <input 
        type="text" 
        placeholder='...'
        value={searchTerm}
        onChange={handleSearchTermChange}
        
        />
    </div>
  )
}
