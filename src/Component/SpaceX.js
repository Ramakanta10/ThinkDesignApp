import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getInitialData} from '../Redux/Actions/SpaceAction';
import FilterPill from './LeftPanel/FilterPill';
import SpaceComponent from './RightPanel/SpaceComponent';


class SpaceX extends React.Component{

constructor(){
super();
this.state={}
}
componentDidMount(){
	let inputData={"limit":100};
	this.props.getInitialData(inputData);
}
render(){
return(
<section className="mainLayout">
{this.props.loadingStatus?<section className="loading"></section>:<noscript />}
<FilterPill />
<SpaceComponent />
</section>
)
}

}
function mapStateToProps(state){
return{
	loadingStatus:state.SpaceReducer.loadingStatus
}
}
function mapDispatchToProps(dispatch){
return bindActionCreators(
{
	getInitialData
},
dispatch
)
}

export default connect(mapStateToProps,mapDispatchToProps)(SpaceX);