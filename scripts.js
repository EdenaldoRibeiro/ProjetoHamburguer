let list = document.querySelector("ul")
let buttonAllShow = document.querySelector(".mostrar-tudo")
let buttonMap = document.querySelector(".mapear")
let buttonReduce = document.querySelector(".somar")
let buttonFilter = document.querySelector(".filtrar")
let myLi = ''

function editCurrency(value) {
    const newValue = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    return newValue
}

function allShow(productsArray) {

    myLi = ''

    productsArray.forEach((products) => {
        myLi += `<li>
                    <img src=${products.src} alt="Hamburguer de X-salada" />
                    <p>${products.name}</p>
                    <p class="item-price">${editCurrency(products.price)}</p>
                </li> `

    })

    list.innerHTML = myLi

}

function mapAllItems() {

    const newPrices = menuOptions.map((itens) => ({
        ...itens,
        price: itens.price * 0.9, // dar 10% de desconto

    }))

    allShow(newPrices)


}

function sumAll() {
    const sum = menuOptions.reduce((acc, itens) => acc + itens.price, 0)
    list.innerHTML = `
    <li>
        <p>O valor total dos itens é ${editCurrency(sum)}</p>
     </li> 
     `


    console.log(sum)
}

function filterAll() {
    const filterVegan = menuOptions.filter((products) => products.vegan)

    allShow(filterVegan)
}











buttonAllShow.addEventListener('click', () => allShow(menuOptions))
buttonMap.addEventListener('click', mapAllItems)
buttonReduce.addEventListener('click', sumAll)
buttonFilter.addEventListener('click', filterAll)







