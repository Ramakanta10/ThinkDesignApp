import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getAllData,getSuccessLaunchData,getSuccessLaunchLandData,getInitialData,getFilterYear,updateInitialData} from '../../Redux/Actions/SpaceAction';
import FilterData from '../../Data/Filetr';
import SpaceUtil from '../../Configuration/SpaceUtil';

class FilterPill extends React.Component{

constructor(){
super();
 this.state = {
            visible: false,
			filterData:	FilterData,
			
        };

}
componentDidMount(){
	
}
 toggleMenu(type,value) {
	 console.log(type,value)
	this.setState({filterData:SpaceUtil().getUpdateState({"data":FilterData,"name":type,"value":value})});
	console.log(this.state.filterData);
	let inputData=SpaceUtil().getInputParams(this.state.filterData);
	console.log(inputData)
	if(inputData.launch_year!=="" && inputData.launch_success!=="" && inputData.land_success!==""){
		this.props.getAllData(inputData);
	}
	else if(inputData.launch_success!=="" && inputData.land_success!==""){
		this.props.getSuccessLaunchLandData(inputData);
	}
	else if(inputData.launch_success!==""){
		this.props.getSuccessLaunchData(inputData);	
	}
	
	else if(inputData.launch_year==="" && inputData.launch_success==="" && inputData.land_success===""){
		
	this.props.updateInitialData();
	}
	else if(inputData.launch_year!=="" || inputData.land_success===""){
	this.props.getFilterYear({"year":inputData.launch_year,"landStatus":inputData.land_success});
	}
    }
render(){
return(
<section className="card cardHeight">
<h3 className="filterSection">Filters</h3>
{
	this.state.filterData.map((data,index)=>
		<section key={index}>
		<div className="filterHeader">
		<span className="filterHeaderStyle">{data.name}</span>
		</div>
			<section className="filterName">{
				data.value.map((list,id)=><span key={id}>
				<button  className={"filterText" + (list.show===true?" active":"")} onClick={this.toggleMenu.bind(this,index,list)}>{list.type}</button>
				</span>)
			}
			</section>
		</section>
		)
}
</section>
)
}

}
function mapStateToProps(state){
return{}
}
function mapDispatchToProps(dispatch){
return bindActionCreators(
{
	
	getAllData,
	getSuccessLaunchData,
	getSuccessLaunchLandData,
	getInitialData,
	getFilterYear,
	updateInitialData
},
dispatch
)
}


export default connect(mapStateToProps,mapDispatchToProps)(FilterPill);