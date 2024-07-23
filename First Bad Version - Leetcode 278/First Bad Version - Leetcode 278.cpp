// The API isBadVersion is defined for you.
// bool isBadVersion(int version);

class Solution {
public:
    int firstBadVersion(int n) {
        int i,j,k,c=0;
        int h=n,l=0,m;

        while(l<=h)
        {
            m=l+(h-l)/2;
            int res=isBadVersion(m);
            if(res==1 and (m==0 or isBadVersion(m-1)!=1)){
                return m;
            }
            else if(res==0){
                l=m+1;
            }else
            h=m-1;
        }
        return m;
        
    }
};