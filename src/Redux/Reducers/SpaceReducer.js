import SpaceUtil from "../../Configuration/SpaceUtil";

const initialState={};
initialState.spaceData=[];
initialState.spaceInitialData=[];
initialState.loadingStatus=false;
export default (state=initialState,action)=>{
const spaceState={...state};
switch (action.type){
case 'UPDATE_INITIAL_DATA':
spaceState.spaceData=action.payload;
spaceState.spaceInitialData=action.payload;
return spaceState;
case 'UPDATE_FILTER_DATA':
spaceState.spaceData=action.payload;
return spaceState;
case 'INITIAL_DATA':
spaceState.spaceData=spaceState.spaceInitialData;
return spaceState
case 'SET_LOADING':
spaceState.loadingStatus=action.payload;
return spaceState;
case 'FILTER_DATA':
spaceState.spaceData=SpaceUtil().filterList(spaceState.spaceInitialData,action.payload.year,action.payload.landStatus);
return spaceState;
default:
return state;
}
}