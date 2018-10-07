/**
 * reference:
 * 1. grokking algorithm ch.8
 * 2. https://en.wikipedia.org/wiki/Set_cover_problem
 */

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

Set.prototype.intersects = function (set) {
    return new Set([...this].filter((e) => set.has(e)));
}

Set.prototype.substract = function (set) {
    return new Set([...this].filter((e) => !set.has(e)));
}

/**
 * brute force
 * - check each subset of stations can cover the states and it's the minimal
 * - time: O(2^n)), total number subset = 2^n
 * - return the minimal set of stations that cover all the states
 */
function set_cover(states, stations) {
    let min_stations = null;

    dfs(-1, new Set(), []); // -1: start checking on empty set of cur_union_states

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

/**
 * approximation (greedy)
 * - repeatly select the station that cover the most states until all states are covered
 * - time: O(n^2)
 *   - number of stations to choose: n (worst case)
 *   - number of stations to consider in each choice: n
 * - return the set of stations that cover all the states close to minimal
 */
function set_cover_approx(states, stations) {
    const final_stations = [];

    let states_need = new Set([...states]);
    let best_station, best_states_covered; // local best
    let states_covered; // temp

    while (states_need.size > 0) {
        best_states_covered = new Set();

        for (let i = 0; i < stations.length; i++) {
            if (stations[i] === null) {
                continue; // selected
            }

            states_covered = stations[i].intersects(states_need);
            if (states_covered.size > best_states_covered.size) {
                best_station = i;
                best_states_covered = states_covered;
            }
        }

        final_stations.push(best_station);
        states_need = states_need.substract(best_states_covered);
        stations[best_station] = null; // selected
    }

    return final_stations;
}

const states = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);
const stations = [
    new Set(['id', 'nv', 'ut']),
    new Set(['wa', 'id', 'mt']),
    new Set(['or', 'nv', 'ca']),
    new Set(['nv', 'ut']),
    new Set(['ca', 'az'])
];
console.log(set_cover(states, stations)); // [0, 1, 2, 4]
console.log(set_cover_approx(states, stations)); // [0, 1, 2, 4]