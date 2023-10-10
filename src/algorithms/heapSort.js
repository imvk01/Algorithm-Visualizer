let values = [];
export default function HeapSort(rects2){
    let rects = rects2.slice();
    values = [];
    let sz = rects2.length;
    heapSort(rects,sz);
    return values;
}
function heapify(rects,n,i){
    let largest = i;
    let l = 2 * i + 1; 
        let r = 2 * i + 2; 

    if (l < n && rects[l].width > rects[largest].width)
        largest = l;
    if (r < n && rects[r].width > rects[largest].width)
        largest = r;
    if (largest !== i) {
        let temp = rects[i];
        rects[i] = rects[largest];
        rects[largest] = temp;
        let value = {
            left:i,
            right:largest,
            sorted: false
        }
        values.push(value);
        heapify(rects, n, largest);
    }
}
function heapSort(rects,n){
    for(let i = Math.floor(n/2)-1;i>=0;i--){
        heapify(rects,n,i);
    }
    for (let i = n-1 ; i > 0; i--) {
        let temp = rects[i];
        rects[i] = rects[0];
        rects[0] = temp;
        let value = {
            left:i,
            right:0,
            sorted:true
        }
        values.push(value);
        heapify(rects, i, 0);
    }
}
