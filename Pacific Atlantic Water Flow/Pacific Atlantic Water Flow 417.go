package main

import "fmt"

func pacificAtlantic(matrix [][]int) [][]int {
	if len(matrix) == 0 || len(matrix[0]) == 0 {
		return [][]int{}
	}

	rows, cols := len(matrix), len(matrix[0])
	// here, rather than use a Set of all coord pairs like in our TS
	// implementation, we create a grid representing all cells in matrix
	pacific := make([][]bool, rows)
	atlantic := make([][]bool, rows)
	for i := range pacific {
		pacific[i] = make([]bool, cols)
		atlantic[i] = make([]bool, cols)
	}
	for i := 0; i < rows; i++ {
		dfs(matrix, pacific, i, 0)
		dfs(matrix, atlantic, i, cols-1)
	}
	for i := 0; i < cols; i++ {
		dfs(matrix, pacific, 0, i)
		dfs(matrix, atlantic, rows-1, i)
	}

	result := [][]int{}
	for i := 0; i < rows; i++ {
		for j := 0; j < cols; j++ {
			if pacific[i][j] && atlantic[i][j] {
				result = append(result, []int{i, j})
			}
		}
	}

	return result

}

func dfs(matrix [][]int, ocean [][]bool, r, c int) {
	ocean[r][c] = true
	directions := [][]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}
	for _, dir := range directions {
		x, y := r+dir[0], c+dir[1]
		if x >= 0 && x < len(matrix) && y >= 0 && y < len(matrix[0]) && !ocean[x][y] && matrix[x][y] >= matrix[r][c] {
			dfs(matrix, ocean, x, y)
		}
	}
}

func main() {
	input := [][]int{
		{1, 2, 2, 3, 5},
		{1, 2, 3, 4, 4},
		{2, 4, 5, 3, 1},
		{6, 7, 1, 4, 5},
		{5, 1, 1, 2, 4},
	}

	result := pacificAtlantic(input)
	fmt.Println(result)
}
