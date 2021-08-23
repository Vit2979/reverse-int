



module.exports = function reverse (i) 
{
    let result = i[i.length -1];
    for(let n = i.length - 2; n >= 0; n=n-1)
    result = result + i[n];
 return result;
}