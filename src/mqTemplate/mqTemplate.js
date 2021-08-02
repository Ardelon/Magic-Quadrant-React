import React from 'react';
import styled from 'styled-components';
import MQChart from '../mqChart/mqChart';
import MQPanel from '../mqPanel/mqPanel';



class MQTemplate extends React.Component  {

   constructor(props) {
       super(props);
       this.handleAddBrand = this.handleAddBrand.bind(this);
       this.handleDeleteBrand = this.handleDeleteBrand.bind(this);
       this.handleChangeBrandLabel = this.handleChangeBrandLabel.bind(this);
       this.handleVisionChange = this.handleVisionChange.bind(this);
       this.handleAbilityChange = this.handleAbilityChange.bind(this);
       this.handleDragChange = this.handleDragChange.bind(this);
       this.state = {data:[]};
   }

   handleAddBrand() {
       const newState = this.state.data.slice();
       newState.push({name:"default",ability:50, vision:50});
       this.setState({data:newState})
   }

   handleDeleteBrand(index) {    
        const newState = this.state.data.slice();
        delete newState[index];
        this.setState({data:newState});
   }

    handleChangeBrandLabel(index, nameValue) {
        const newState = this.state.data.slice();
        newState[index].name = nameValue;
        this.setState({data:newState});
    }

    handleVisionChange(index, visionValue) {
        const newState = this.state.data.slice();
        newState[index].vision = visionValue;
        this.setState({data:newState});
    }

    handleAbilityChange(index, abilityValue) {
        const newState = this.state.data.slice();
        newState[index].ability = abilityValue;
        this.setState({data:newState});
    }

    handleDragChange(index, abilityValue, visionValue) {
        const newState = this.state.data.slice();
        newState[index].ability = abilityValue;
        newState[index].vision = visionValue;
        this.setState({data:newState})
    }


    render () {
        return (

            <div>
                <MQChart
                    handleVisionChange={this.handleVisionChange}
                    handleAbilityChange={this.handleAbilityChange}
                    handleDragChange={this.handleDragChange}
                    dataState={this.state.data} 
                />
                <MQPanel 
                    handleAddBrand={this.handleAddBrand} 
                    handleDeleteBrand={this.handleDeleteBrand} 
                    handleChangeBrandLabel={this.handleChangeBrandLabel}
                    handleVisionChange={this.handleVisionChange}
                    handleAbilityChange={this.handleAbilityChange}
                    dataState={this.state.data} />
            </div>
            )
    }
}

export default MQTemplate