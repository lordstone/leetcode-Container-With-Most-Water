/**
 * @param {number[]} height
 * @return {number}
 */

var calcArea = function(x, y, height){
    return  ( Math.abs(x - y) * Math.min(height[x], height[y])); 
}
 
var maxArea = function(height) {
    var ptr1 = 0, ptr2 = height.length - 1;
    var area = 0, l = 0, r = height.length - 1;
    while(ptr1 !== ptr2){
        var tmp = calcArea(ptr1, ptr2, height);
        if(tmp > area){
            l = ptr1;
            r = ptr2;
            area = tmp;
        }
        if(height[ptr1] >= height[ptr2]){
            ptr2 --;
        }else{
            ptr1 ++;
        }
    }
    return area;
};
