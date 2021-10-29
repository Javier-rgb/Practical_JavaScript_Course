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

function is_even(num){
    return (num % 2 == 0);
}

function get_median(lista){
    const middle = parseInt(lista.length / 2);

    if(is_even(lista.length)){
        return (lista[middle] + lista[middle - 1]) / 2;
    }
    else{
        return lista[middle];
    }
}

console.log(get_median(salaries_all));