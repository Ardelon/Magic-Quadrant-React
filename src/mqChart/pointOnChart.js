import React from 'react';
import styled from 'styled-components';

const PointOnChartTemplate = styled.div`
    width:15px;
    height:15px;
    background-color:#3878A2;
    position:absolute;
    
`;

const PointOnChart = (props) => {

    const {index, brand, handleVisionChange, handleAbilityChange, handleDragChange, chartBorders} = props;

    const handleOnDrag = (e) => {
        const abilityValue = e.clientY;
        const visionValue = e.clientX;
        // console.log(chartBorders);

        handleDragChange(index, abilityValue, visionValue)
    }
 
    return (
        <PointOnChartTemplate 
            draggable={true}
            onDrag={handleOnDrag}
            style={{top:brand.vision, left:brand.ability}}
        />

    )
}

export default PointOnChart