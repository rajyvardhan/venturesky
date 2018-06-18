const jimp = require('jimp');


function printFunction(x,y,h,k,n){
    jimp.read("pth to the image")
    .then((image)=>{
        for(let i =0;i<n;i++){
            jimp.loadFont("path to the font")
            .then((font)=>{
                image.print(font,x,y,str1);
                image.print(font,x+h,y,str2);
                y = y + k;
            })
            .catch((err)=>{
                next(err);
                return;
            })
        }
    })
    .catch((err)=>{
        next(err);
        return;
    })
}

module.exports = printFunction();