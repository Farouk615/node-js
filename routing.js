function handlerequest (path , res){
    fs.readFile(path,null,(error,data)=>{
        if(error){
            console.log('there is an error');

        }
        else {
            console.log('server is running');
            res.end(data);
        }

    })

}
module.exports = {
    handlerequest : handlerequest
}