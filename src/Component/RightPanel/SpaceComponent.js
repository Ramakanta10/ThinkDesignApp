import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class SpaceComponent extends React.Component{

constructor(){
super();
this.state={}
}
componentDidMount(){
	
}
render(){
	
	const {spaceData}=this.props;
return(
<section>
<section  className="rightPanelLayout">
{
	spaceData.map((data,index)=>
		<section className="card" key={index}>
		
		<div className="spaceImage"><img src={data.links.mission_patch} alt="Not Available" height="100" width="100"/></div>
		<div className="missionSectionName">{data.mission_name}{data.flight_number?'#'+data.flight_number:""}</div>
			<div className="missionIDStyle">Mission Ids:
			{data.mission_id.map((list,id)=><ul className="idsStyling" key={id}><li>{list}</li></ul>)}
			</div>
			<span className="missionSection">Launch Year:{data.launch_year}</span>
			<span className="missionSection">Successful Launch:{data.launch_success===true?'True':(data.launch_success===true)?'False':"N/A"}</span>
			<span className="missionSection">Successful Landing:{data.rocket.first_stage.cores[0].land_success===true?"True":(data.rocket.first_stage.cores[0].land_success===false)?"False":"N/A"}</span>
		</section>
		)
		
}
</section>
</section>
)
}

}
function mapStateToProps(state){
return{
	spaceData:state.SpaceReducer.spaceData,
}
}
function mapDispatchToProps(dispatch){
return bindActionCreators(
{
	
},
dispatch
)


}
export default connect(mapStateToProps,mapDispatchToProps)(SpaceComponent);