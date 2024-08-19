class Solution {
public:
    int hammingWeight(uint32_t n) {
        int ans = 0;

        while (n != 0) {
            ans++;
            n &= (n - 1);
        }

        return ans;
    }
};
