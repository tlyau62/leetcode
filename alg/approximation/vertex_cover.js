/**
 * set operations
 */
Set.prototype.union = function (set) {
    return new Set([...this, ...set]);
}

Set.prototype.isSubset = function (set) {
    return [...this].every((e) => set.has(e));
}

Set.prototype.equals = function (set) {
    return this.isSubset(set) && set.isSubset(this);
}

/**
 * brute force
 * return the minimal set of stations that cover all the states
 */
function vertex_cover(states, stations) {
    let cur_set, cur_stations, min_set, min_stations;

    min_set = min_stations = null;

    for (let i = 0; i < stations.length; i++) {
        cur_set = new Set();
        cur_stations = [];

        for (let j = i; j < stations.length; j++) {
            cur_set = cur_set.union(stations[j]);
            cur_stations.push(j);

            if (cur_set.equals(states)) {
                if (min_stations === null || cur_stations.length < min_stations.length) {
                    min_stations = cur_stations;
                    min_set = cur_set;
                }
            }
        }
    }

    console.log(min_set);

    return min_stations;
}

const states = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);
const stations = [
    new Set(['id', 'nv', 'ut']),
    new Set(['wa', 'id', 'mt']),
    new Set(['or', 'nv', 'ca']),
    new Set(['nv', 'ut']),
    new Set(['ca', 'az'])
];
console.log(vertex_cover(states, stations));