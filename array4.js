let firstArr = [' Math',' English',' Programming'];
let secondArr = [' Geography',' Spanish',' English' ];
let cek = false;

document.write(`<h3>Data Pertama:${firstArr}</h3>`);
document.write(`<h3>Data Kedua:${secondArr}</h3>`);
for(i = 0; i < firstArr.length; i++){
    for(j = 0; j < secondArr.length; j++){
        if(firstArr[i] == secondArr[j]){
            let cek = true;
            console.log(cek)
            document.write(`<h4>Data yang sama: ${firstArr[i]}</h4>`)
        }else{
            console.log(cek)
        }
    }
}