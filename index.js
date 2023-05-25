const highlighter=(data,input)=>{
    let num,len;
    if(data.length>0 && input.length>0){
       num=data?.toLowerCase().indexOf(input).toLowerCase();
       len=input.length;
    }
    else{
data=''
input=''
    }
    
return(<div>
    <span>{data.substr(0,num)}</span>
    <span>{input}</span>
    <span>{data.substr(num+len)}</span>
</div>)
}
module.exports=highlighter;