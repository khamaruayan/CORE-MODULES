var fs=require('fs');

const dir="apis";

fs.rmdir(dir, function(){
    console.log("Directory removed successfully");
});