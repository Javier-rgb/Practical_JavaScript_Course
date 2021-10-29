// const list_x = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

// const list_count = {};

// list_x.map(
//     function (item) {
//         if (list_count[item]) {
//             list_count[item] = list_count[item] + 1;
//         }
//         else {
//             list_count[item] = 1;
//         }
//     }
// );

// const list_object = Object.entries(list_count).sort(
//     function (itemA, itemB) {
//         return itemA[1] - itemB[1];
//     }
// )
 
// const mode = list_object[list_object.length - 1];

function get_mode(list_x){

    list_count = {};

    list_x.map(
        function (item) {
            if (list_count[item]) {
                list_count[item] = list_count[item] + 1;
            }
            else {
                list_count[item] = 1;
            }
        }
    );

    const list_object = Object.entries(list_count).sort(
        function (itemA, itemB) {
            return itemA[1] - itemB[1];
        }
    )
 
    mode = list_object[list_object.length - 1];

    return mode;
}