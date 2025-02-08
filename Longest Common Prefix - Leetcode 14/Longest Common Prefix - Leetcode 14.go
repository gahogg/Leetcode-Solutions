package solution

func longestCommonPrefix(strs []string) string {
    minLen := len(strs[0])
    for _,v:=range strs{
        if minLen>len(v){
            minLen = len(v)
        }
    }
    str := ""
    for i:=0;i<minLen;i++{
        if isSame(i,strs){
            str+=string(strs[0][i])
        }else{
            break
        }
    }
    return str
}

func isSame(i int, strs []string) bool{
    for j:=0;j<len(strs)-1;j++{
        if strs[j][i]!=strs[j+1][i]{
            return false
        } 
    }
    return true
}
