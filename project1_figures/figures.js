// Square Section

console.group("squares");
//const squareSide = 5;
//console.log("the square sides length is: " + squareSide);

function squarePerimeter(side){
    return side * 4;
} 

function squareArea(side){
    return side * side;
} 

// console.log("the square Perimeter is: " + squarePerimeter);
// console.log("the square Area is: " + squareArea);

console.groupEnd();

// Triangle Section

// const triangleS1 = 6;
// const triangleS2 = 6;
// const triangleBase = 4;
// const triangleHeight = 5;

console.group("Triangle");

// console.log("The Triangle sides lenght are: " + triangleS1 + ", " + triangleS2 + ", " 
//            + triangleBase);

function trianglePerimeter(side1, side2, base){
    return side1 + side2 + base;
}

function triangleArea(base, height){
    return (base * height) / 2;
}

// console.log("the Triangle Perimeter is: " + trianglePerimeter);
// console.log("the Triangle Area is: " + triangleArea);

console.groupEnd();

// Circle Section

console.group("Circles");

const PI = Math.PI;
// const rad = 4;
// const diameter = rad * 2;

function periphery(rad){
    return (rad * 2) * PI;
}

function circleArea(rad){
    return PI * (rad * rad);
}

// console.log("The circle rad is: " + rad)

// console.log("the Circle periphery is: " + periphery);
// console.log("the Circle Area is: " + circleArea);

console.groupEnd();
