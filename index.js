import { random } from "math";

const point = coords => {
    return {
        type: 'Point',
        coordinates: coords,
    }
}

const polygon = coords => {
    return {
        type: 'Polygon',
        coordinates: coords,
    }
}

const Point = (count) => {
    var gen = () => {random() * 100}
    return {p1: gen(), p2: gen()};
}