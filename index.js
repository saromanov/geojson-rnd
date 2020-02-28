import { random, PI } from "math";

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
    var gen = () => {random() - 0.5}
    return {p1: gen()*360, p2: gen()*180};
}

const Line = (length) => {
    let angle = random()*2 * PI;
    let data_angle = angle + (random() - 0.5) * 2;
}

const gen_line = () => {
    points = [];
    for(i = 0;i < 3;i++) {
        points.push(Point(2));
    }
    return points;
}