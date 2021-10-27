// list_x = [1000, 200, 500, 400];

// const list_half = parseInt(list_x.length / 2);

function is_even(num){
    if (num % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

function sorting_list(list_x){
    list_x.sort(function(a, b){
        return a - b;
    });

    return list_x;
}

function get_median(list_in) {
    
    list_half = parseInt(list_in.length / 2);

    list_in = sorting_list(list_in);

    if (is_even(list_in.length)) {
        median = (list_in[list_half] + list_in[list_half - 1]) / 2;
    }
    else {
        median = list_in[list_half];
    }

    return median;
}


// list_test = [5, 4, 10, 2];

// list_test.sort(function(a, b){
//     return a - b;
// });



// if (is_even(list_x.length)) {
//     median = (list_x[list_half] + list_x[list_half - 1]) / 2;
// }
// else {
//     median = list_x[list_half];
// }
