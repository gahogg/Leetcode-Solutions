package solution

func maxProfit(prices []int) int {
    maxProf := 0
    min := prices[0]
    for i:=1;i<len(prices);i++{
        profit := prices[i] - min
        if maxProf < profit {
            maxProf = profit
        }
        if min > prices[i] {
            min = prices[i]
        }
    }
    return maxProf
}
