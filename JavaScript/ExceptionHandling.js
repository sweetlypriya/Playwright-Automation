try{
    let name="priya"
    console.log(name)

}catch(err){
    console.log(err.name)
    console.log(err.message)
    console.log(err.stack);

}finally{
    console.log("finally is executed")
}