const getCalculatedCircleArea = (radius) => {
    // Using the formula: Area = π * r * r
    const area = Math.PI * radius * radius;
    return area;
}

const radius = 10;
const circleArea = getCalculatedCircleArea(radius);
console.log(circleArea);
