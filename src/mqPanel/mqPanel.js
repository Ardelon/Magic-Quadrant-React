import React, {useEffect} from 'react';
import MQPanelElement from './mqPanelElement';

import styled from 'styled-components';

const Buttons = styled.button`
    background-color:#E3E4E7;

    &:hover {
        background-color: #696969;
      }
`

const TableHeader = styled.header`
    background-color:#3878A2;
    color:white;
    font-family:sans-serif
`;


class MQPanel extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddBrand = this.handleAddBrand.bind(this);
        this.handleDeleteBrand = this.handleDeleteBrand.bind(this);

    }
    
    handleAddBrand(e) {
        e.stopPropagation()
        this.props.handleAddBrand()
    }
    
    handleDeleteBrand(e) {
        this.props.handleDeleteBrand(e.target.value);
    }

    
    
    
    render () {
        const dataList = this.props.dataState.map((brand,index) => 
            <MQPanelElement 
                key={brand.name+Math.random()} 
                brand={brand} 
                index={index} 
                handleDeleteBrand={this.props.handleDeleteBrand} 
                handleChangeBrandLabel={this.props.handleChangeBrandLabel} 
                handleVisionChange={this.props.handleVisionChange}
                handleAbilityChange={this.props.handleAbilityChange}
            />);

        return (

            <div>
            
            <Buttons htmlFor="adding-new-brand" onClick={this.handleAddBrand}>Add</Buttons>
            <fieldset>
                <label htmlFor="company-brand">Label</label>
                <label htmlFor="company-vision">Vision</label>
                <label htmlFor="company-ability">Ability</label>
            </fieldset>
            {dataList}
        </div>
    )
    }
}

export default MQPanel