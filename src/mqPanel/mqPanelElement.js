import React, {useEffect} from 'react';
import styled from 'styled-components';

const Buttons = styled.button`
    background-color:#E3E4E7;

    &:hover {
        background-color: #696969;
      }
`

const MQPanelElement =(props) => {

    const {index, brand, handleDeleteBrand, handleChangeBrandLabel, handleVisionChange, handleAbilityChange} = props;
    console.count('Element Render');

    const handleBrandNameChange = (e, index) => {
        e.stopPropagation();
        const value = e.target.value;
        handleChangeBrandLabel(index, value);
       
    };

    const handleBrandVisionChange = (e) => {
        e.stopPropagation();
        const value = e.target.value;
        handleVisionChange(index,value)
    };

    const handleBrandAbilityChange = (e) => {
        e.stopPropagation();
        const value = e.target.value;
        handleAbilityChange(index,value)
    };

 
 
 

    return (
        <li>
            <input onChange={(e) => {handleBrandNameChange(e,index)}} value={brand.name}></input>
            <input onChange={(e) => {handleBrandVisionChange(e,index)}} value={brand.vision} ></input>
            <input onChange={(e) => {handleBrandAbilityChange(e, index)}} value={brand.ability} ></input>
            <Buttons     onClick={() => {handleDeleteBrand(index)}}>Delete</Buttons>
        </li>
    )
}

export default MQPanelElement