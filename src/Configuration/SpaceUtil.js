

module.exports=function(){
const exports={
	 getInputParams(data){
		 let inputData={"limit":"","launch_success":"","land_success":"","launch_year":""}
		 if(data && Object.keys(data).length>0){
			 inputData={"limit":100,
		"launch_success":(data[1].selectedValue!==''?data[1].selectedValue==='True':''),
		"land_success":(data[2].selectedValue!==''?data[2].selectedValue==='True':''),
		"launch_year":data[0].selectedValue}; 
		 }
		return inputData;
	},
	getUpdateState(filterData){
		 /* eslint-disable */
		filterData.data[filterData.name].value.map(function(data){
			if(data.type===filterData.value.type){
				data.show=!data.show;
				filterData.data[filterData.name].selectedValue=data.show?data.type:'';
			}
			else{
				data.show=false;
			}
		})
		 /* eslint-enable */
		return filterData.data;
	},
	filterList(data,year,landStatus){
		if(landStatus!=="" && year!==''){
		return data.filter((list)=>list.launch_year===year && list.rocket.first_stage.cores[0].land_success===landStatus);	
		}
		else if(landStatus==="" && year!==''){
			return data.filter((list)=>list.launch_year===year);	
		}
		else if(landStatus!=="" && year===''){
			return data.filter((list)=>list.rocket.first_stage.cores[0].land_success===landStatus);	
		}
		else{
			return data;
		}
		
	}
}
return exports;
}