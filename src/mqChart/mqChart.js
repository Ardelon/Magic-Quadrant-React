import React from 'react';
import PointOnChart from './pointOnChart';
import styled from 'styled-components';

//#region style

const MQChartArea = styled.div`
    width:200px;
    height:200px;
    border:2px solid #696969;
    position:relative;
`;



const labelOfPoints = styled.p`
    font-size:13px;
    font-family:sans-serif;
    color:#3878A2;
`;

const InnerAxisOfChartVer = styled.div`
    width: 2px;
    height:200px;
    background-color:#E3E4E7;
    transform:translate(100px,0);
    position:absolute;
`;

const InnerAxisOfChartHz = styled.div`
    width: 200px;
    height:2px;
    background-color:#E3E4E7;
    transform:translate(0,100px);
    position:absolute;

`;

const labelAreasOnChart = styled.div`
    color:white;
    background-color:#3878A2;
`

const tableHeader = styled.header`
    background-color:#3878A2;
    color:white;
    font-family:sans-serif
`;

const buttons = styled.button`
    background-color:#E3E4E7;

    &:hover {
        background-color: #696969;
      }
`



//#endregion

class MQChart extends React.Component  {

    constructor(props) {
        super(props);
        this.chartAreaRef = React.createRef();
        this.borders = this.handleFindBorders.bind(this)
        this.state = null;
    };

    handleFindBorders = (areaElementRef) => {
       
        const topLeftCorner = {top:areaElementRef.offsetTop,left:areaElementRef.offsetLeft}
        console.log(topLeftCorner);
        console.log(this.chartAreaRef.current);
        console.log(this.chartAreaRef.current.offsetTop);
        this.setState = (topLeftCorner)
    }
    
    render () {
        // console.log('Chart Render');
        // const areaElementRef = this.chartAreaRef.current
        // console.log(areaElementRef);
        // this.handleFindBorders(areaElementRef)

        const pointList = this.props.dataState.map((brand, index) => 
            <PointOnChart 
                key={brand.name+Math.random()}
                index={index} 
                brand={brand} 
                handleVisionChange={this.props.handleVisionChange}
                handleAbilityChange={this.props.handleAbilityChange}
                handleDragChange={this.props.handleDragChange}
                chartBorders={this.state}

            /> 
        )





        return (
            <MQChartArea ref={this.chartAreaRef} >
                <InnerAxisOfChartVer/>
                <InnerAxisOfChartHz/>
                {pointList}
            </MQChartArea>

        )
    }
    
}

export default MQChart