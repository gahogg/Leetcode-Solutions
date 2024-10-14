package solution

func romanToInt(s string) int {
	val := 0
	prevVal := 1
	for i := len(s) - 1; i >= 0; i-- {
		sVal := symbolVal(s[i])
		if prevVal > sVal {
			val -= sVal
		} else {
			val += sVal
		}
		prevVal = sVal
	}
	return val
}

func symbolVal(symbol byte) int {
	switch symbol {
	case 'M':
		return 1000
	case 'D':
		return 500
	case 'C':
		return 100
	case 'L':
		return 50
	case 'X':
		return 10
	case 'V':
		return 5
	default:
		return 1
	}
}
