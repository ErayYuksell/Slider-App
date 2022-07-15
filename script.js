var models = [
    {
        name : 'Bmw 418d',
        image : 'image/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name : 'Mazda CX-3',
        image : 'image/mazda.jpg',
        link : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name : 'Volvo S60',
        image : 'image/volvo.jpg',
        link : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name : 'Skoda Superb',
        image : 'image/skoda.jpg',
        link : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name : 'Honda Civic',
        image : 'image/honda.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
];

var index=3;
var slaytcount=models.length;
showslide(index);
document.querySelector('.fa-solid fa-circle-arrow-left fa-2x').addEventListener('click',function(){
    index--;
    showslide(index);
    console.log(index);
});
document.querySelector('.fa-solid fa-circle-arrow-right fa-2x').addEventListener('click',function(){
    index++;
    showslide(index);

});
function showslide(i){
    index=i;
    if(i<0){
        index=slaytcount-1;
    }
    if(i>=slaytcount){
        index=0;
    }
    document.querySelector('.card-title').textContent=models[index].name;
    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    document.querySelector('.card-link').setAttribute('href',models[index].link);
    
}
