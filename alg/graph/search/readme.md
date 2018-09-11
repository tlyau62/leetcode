# Backtracking
- abandons partial solutions(current brunch) when they are found not to satisfy a complete solution
- common problems
    - find a cycle in a graph during dfs => return
        - leetcode: 202, 207, 657
    - memorize overlapping problems => return

# DFS
- traverses a graph branch by branch before backtracking

# BFS
- traverses a graph level by level

# Divide and conquer
1. split the original problem into branches(subproblems)
2. traverse all subproblems by DFS + backtrack/BFS 
3. conquer = solve each subproblem and know how to combine them back to the original problem