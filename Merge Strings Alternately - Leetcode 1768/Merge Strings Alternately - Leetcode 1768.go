package solution

func mergeAlternately(word1 string, word2 string) string {
    mergedWord := ""
    i:=0
    for i<len(word1) && i<len(word2){
        mergedWord += string(word1[i])+string(word2[i])
        i++
    }

    if i <len(word1){
        mergedWord += word1[i:]
    }

    if i <len(word2){
        mergedWord += word2[i:]
    }

    return mergedWord
}
