let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

function dom(selector){
    return document.querySelector(selector);
}

function domAll(selector){
    return document.querySelectorAll(selector);
}

//Liệt kê danh sách mắt kính

const display = (item) =>{
    let html = item.reduce((result, value) =>{
        return result + `
        
        <div class="vglasses__items col-4">
        <img src="${value.src}" alt="" class="img-fluid" data-id=${value.id}>
        </div>
        
        `
    },"");

    dom('#vglassesList').innerHTML = html;
};
//Hiển thị ra màn hình
display(dataGlasses);

//Hiện thông tin sản phẩm
const displayInfo = (info) =>{
    let html = `
        <h3>${info.name} - ${info.brand} (${info.color})</h3>
        <span class="badge badge-danger">$${info.price}</span>
        <span class="text-success">Stocking</span>
        <p>${info.description}</p>
    `;

    dom('#glassesInfo').innerHTML = html;
}

//Hiển thị kính trên người mẫu
const displayGlass = (glass) =>{
    let html = `
    <img src = "${glass.virtualImg}" alt="" id="${glass.id}">`;
    dom('#avatar').innerHTML = html;
}

//Hàm tìm kính theo id

const findGlass = (id) => dataGlasses.filter((item) => item.id === id);
   
const changeGlass = (glass) => {
    displayGlass(glass);
    dom('#glassesInfo').style.display = 'block';
    displayInfo(glass);
}

const glassPicker = (evt) =>{
    let id = evt.target.getAttribute("data-id");

    if(!id){
        return;
    }

    const glass = findGlass(id);
    changeGlass(...glass);
}
//gắn sự kiện click vào các sản phẩm
dom('#vglassesList').addEventListener('click', glassPicker);




