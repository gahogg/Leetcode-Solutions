class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int m = matrix.size();
        int n = matrix[0].size();
        int l = 0;
        int r = m * n - 1;

        while (l <= r) {
            int mid = (l + r) / 2;
            int i = mid / n;
            int j = mid % n;
            int midNum = matrix[i][j];

            if (target == midNum) {
                return true;
            } else if (target < midNum) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return false;
    }
};
