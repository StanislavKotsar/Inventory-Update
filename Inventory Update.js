
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  var obj={};
  function addNew(arr){
    obj[arr[1]]=arr[0];
  }
  
  arr1.forEach(addNew);
  
  for(var i=0;i<arr2.length;i++){
    if(obj.hasOwnProperty(arr2[i][1])===true){
      obj[arr2[i][1]]+=arr2[i][0];
    }else{obj[arr2[i][1]]=arr2[i][0];}
  }
 
  
 var array = $.map(obj, function(value, index) {
    return [[value,index]];
   
});
  var nam=[];
  var res=[];
function name(a){
  nam.push(a[1]);
}
 array.forEach(name); 
  nam.sort();
 function add(a){
   res.push([obj[a],a]);} 
  
 nam.forEach(add); 
    return res;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
