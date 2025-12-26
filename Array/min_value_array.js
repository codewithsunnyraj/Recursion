function check(arr, index) {
    if(index == -1){
        return 1;
    }

    return Math.min(arr[index],check(arr,index-1));
}

let arr = [7, 2, 4, -10, 6];
let index = arr.length - 1;

let value = check(arr,index);
console.log(value);