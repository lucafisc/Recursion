function mergeSort(array) {
  if (array.length === 1) return array;
  else {
    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);
    left = mergeSort(left);
    right = mergeSort(right);
    const left_len = left.length;
    const right_len = right.length;
    let i = 0;
    let j = 0;
    let k = 0;
    let new_arr = [];
    while (i < left_len && j < right_len) {
      if (left[i] < right[j]) new_arr[k++] = left[i++];
      else new_arr[k++] = right[j++];
    }
    while (i < left_len) new_arr[k++] = left[i++];
    while (j < right_len) new_arr[k++] = right[j++];

    return new_arr;
  }
}
