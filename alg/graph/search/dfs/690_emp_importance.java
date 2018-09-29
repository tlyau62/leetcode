/*
// Employee info
class Employee {
    // It's the unique id of each node;
    // unique id of this employee
    public int id;
    // the importance value of this employee
    public int importance;
    // the id of direct subordinates
    public List<Integer> subordinates;
};
*/
class Solution {

    HashMap<Integer, Employee> map = new HashMap<>();

    public int getImportance(List<Employee> employees, int id) {

        for (Employee emp : employees) {
            map.put(emp.id, emp);
        }

        return dfs(id);

    }

    private int dfs(int i) {
        return map.get(i).importance
                + map.get(i).subordinates.stream().map(eid -> dfs(eid)).reduce(0, (a, imp) -> a + imp);
    }

    // private int dfs(int i) {
    // Employee emp = map.get(i);
    // int sum = emp.importance;

    // for (Integer eid: emp.subordinates) {
    // sum += dfs(eid);
    // }

    // return sum;
    // }

}