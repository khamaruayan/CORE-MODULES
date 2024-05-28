var fs=require('fs');
/*fs.readFile('demo.txt', function(err, data){
    if(err)
        {
            console.log(err);
        }
    console.log(data.toString())
});*/

var data='New content for new file. And i am changing the value';
fs.writeFile('demo1.txt', data,function(err){
    if(err)
        {
            console.log(err);
        }
        console.log('Success. File is written')
        fs.readFile('demo1.txt', function(err, data){
            if(err)
                {
                    console.log(err);
                }
            console.log(data.toString())
        });
       
        

});