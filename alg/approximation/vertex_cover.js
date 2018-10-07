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
    let min_stations = null;

    dfs(-1, new Set(), []);

    return min_stations;

    function dfs(cur_station, cur_union_states, cur_stations) {
        // update min stations
        if (cur_union_states.equals(states)) {
            if (min_stations === null || cur_stations.length < min_stations.length) {
                min_stations = cur_stations;
                // debug: console.log(cur_union_states);
            }
        }

        // move to next station
        if (++cur_station < stations.length) {
            dfs(cur_station, cur_union_states.union(stations[cur_station]), [...cur_stations, cur_station]);
            dfs(cur_station, cur_union_states, cur_stations);
        }
    }

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