const highlighter=(data,input)=>{
    const num=data?.toLowerCase().indexOf(input).toLowerCase();
    const len=input.length;
return(<div>
    <span>{data.substr(0,num)}</span>
    <span>{input}</span>
    <span>{data.substr(num+len)}</span>
</div>)
}
module.exports=highlighter;