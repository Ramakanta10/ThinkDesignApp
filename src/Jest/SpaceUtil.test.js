import SpaceUtil from '../Configuration/SpaceUtil';
import FilterData from '../Data/Filetr';
describe('TestCase for SpaceUtil',()=>{
	it('Should return input params',()=>{
	const value=SpaceUtil().getInputParams();
	expect(Object.keys(value).length).toBe(4);
})
it('Should return input params with converting string as boolean',()=>{
	let data=[{"selectedValue":""},{"selectedValue":"True"},{"selectedValue":"True"}]
	const value=SpaceUtil().getInputParams(data);
	
	expect(typeof(value.launch_success)).toBe('boolean');
})
it('Should return true when pass false',()=>{
	const value=SpaceUtil().getUpdateState({"data":FilterData,"name":0,"value":{type: "2006", show: false}});
	
	expect(value[0].value[0].show).toBe(true);
})
it('Should return false when pass true',()=>{
	const value=SpaceUtil().getUpdateState({"data":FilterData,"name":0,"value":{type: "2006", show: false}});
	
	expect(value[0].value[0].show).toBe(false);
})
it('Should return list of array based on year',()=>{
	let data=[{"launch_year":"2006"},{"launch_year":"2009"},{"launch_year":"2009"},{"launch_year":"2007"}]
	const value=SpaceUtil().filterList(data,"2006");
	
	expect(value.length).toBe(1);
})
})