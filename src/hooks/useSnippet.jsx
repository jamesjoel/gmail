let useSnippet = (str)=>{
    let arr = str.split(" ");
    let newstr = arr[0]+" "+arr[1]+" "+arr[2]+" ...";
    return newstr;
}
export default useSnippet;

