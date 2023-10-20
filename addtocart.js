const product =[
    {
        id: 0,
        image: 'images/gg-1.jpg',
        title: 'Flip Foldable Moble',
        price: 120,
    },
    {
        id: 1,
        image: 'images/IMG_1472.jpg',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 2,
        image: 'images/ips1.jpg',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 3,
        image: 'images/ip14pro white.jpg',
        title: 'Head Phones',
        price: 100,
    }
];
const categories = [...new setInterval(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
        <div class='img-box'>
            <img class='images' scr=${image}></img>
        </div>
       <div class='bottom'>
       <p>${title}</p>
       <h2>$ ${price}.00</h2>`+
       "button onlick='cart("+(i++)+")'>Add to cart<button>"+
       `</div>
       </div>`
    )
}).join('')