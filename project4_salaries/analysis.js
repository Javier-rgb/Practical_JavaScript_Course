// Helpers
function is_even(num){
    return (num % 2 == 0);
}


// Creating & sorting an Array with the salaries
const salaries_all = colombia.map(
    function(person) {
        return person.salary;
    }
);

const salaries_sorted = salaries_all.sort(
    function(a, b){
        return a - b;
    }
);

splice_start = (salaries_sorted.length * 90) / 100;
splice_qty = salaries_sorted.length - splice_start;
salaries_top10 = salaries_sorted.splice(splice_start, splice_qty);


// MAIN
function get_median(lista){
    const middle = parseInt(lista.length / 2);

    if(is_even(lista.length)){
        return (lista[middle] + lista[middle - 1]) / 2;
    }
    else{
        return lista[middle];
    }
}

median = get_median(salaries_all);

median_top10 = get_median(salaries_top10);

console.log(median, median_top10);