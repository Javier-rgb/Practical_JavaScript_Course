// const list_1 = [100, 200, 300, 500];

// let total_list = 0;

// for (let i = 0; i < list_1.length; i++){
    
//     total_list = total_list + list_1[i];
// }

// mean = total_list / list_1.length;

function get_mean(list_in){
    let total_list = 0;

    for (let i = 0; i < list_in.length; i++){
    
        total_list = total_list + list_in[i];
    }

    return total_list / list_in.length;
}

