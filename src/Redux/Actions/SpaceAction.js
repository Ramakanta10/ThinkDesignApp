import SpaceUtil from "../../Configuration/SpaceUtil";

export const setLoadingStatus=data=>{
	return {
		type:'SET_LOADING',
		payload:data,
	}
}

export const getInitialData=data=>{
	return dispatch=>{
		dispatch(setLoadingStatus(true));
		fetch("https://api.spacexdata.com/v3/launches?limit="+data.limit)
      .then(res => res.json())
      .then(
        (result) => {
			
         dispatch({
			 type:'UPDATE_INITIAL_DATA',
			 payload:result,
		 });
		 dispatch(setLoadingStatus(false));
        },
    
        (error) => {
          
        }
      )
	}

}
export const getAllData=(data)=>{
	return dispatch=>{
		dispatch(setLoadingStatus(true));
		fetch("https://api.spacexdata.com/v3/launches?limit="+data.limit+"&launch_success="+data.launch_success+"&land_success="+data.land_success+"&launch_year="+data.launch_year)
      .then(res => res.json())
      .then(
        (result) => {
			
         dispatch({
			 type:'UPDATE_FILTER_DATA',
			 payload:result,
		 });
		 dispatch(setLoadingStatus(false));
        },
    
        (error) => {
          
        }
      )
	}

}

	
export const getSuccessLaunchLandData=data=>{
	return dispatch=>{
		dispatch(setLoadingStatus(true));
		fetch("https://api.spacexdata.com/v3/launches?limit="+data.limit+"&launch_success="+data.launch_success+"&land_success="+data.land_success)
      .then(res => res.json())
      .then(
        (result) => {
          dispatch({
			 type:'UPDATE_FILTER_DATA',
			 payload:result,
		 });
		 dispatch(setLoadingStatus(false));
        },
        
        (error) => {
          
        }
      )
	}

}
export const getSuccessLaunchData=(data)=>{
	return dispatch=>{
		dispatch(setLoadingStatus(true));
		fetch("https://api.spacexdata.com/v3/launches?limit="+data.limit+"&launch_success="+data.launch_success)
      .then(res => res.json())
      .then(
        (result) => {
			let finalresult=result;
			if(data.launch_year){
				finalresult=SpaceUtil().filterList(result,data.launch_year,data.land_success);
			}
          dispatch({
			 type:'UPDATE_FILTER_DATA',
			 payload:finalresult,
		 });
		 dispatch(setLoadingStatus(false));
        },
     
        (error) => {
          
        }
      )
	}

}
export const getFilterYear=(data)=>{
	return {
		type:'FILTER_DATA',
		payload:data,
	}
	
}
export const updateInitialData=(data)=>{
	return {
		type:'INITIAL_DATA',
		payload:data,
	}
	
}
