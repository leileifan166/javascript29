var arr = [];
arr[0] = 0;
arr[1] = 1;
arr[2] = 2;
arr[3] = 3;
delete arr[0];
delete arr[1];
document.write(arr[0]);
document.write(arr[1]);
document.write(arr[2]);
document.write(arr[3]);
document.write("<br>");
document.write(arr.length);
document.write("<br>");







var arr2 = [4]
var arr1 = new Array(3);
document.write(arr1[0]);
document.write(arr2[0]);


Array.prototype.outLast=function(){
    document.write(this[this.length-1]);
}
var arr=new Array(1,2,3,4,5,6,7,8);
arr.outLast();

