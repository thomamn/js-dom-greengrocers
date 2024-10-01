const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35
    }
  ],
  cart: []
};

const itemListUL = document.querySelector('.store--item-list')


const total=document.querySelector('.total-number')

totalsum=0

function handleClick(item, inc){

  for (let i=0; i<state.cart.length; i++){
    if (item.name===state.cart[i].name){
      state.cart[i].number+=inc
      console.log(state.cart)
      renderCartItems(item, state.cart[i].number)
      totalsum+=inc*item.price
      total.innerText=totalsum
      return
    }

  }
  
  const newItem={id: item.id,name:item.name, number:1}
  state.cart.push(newItem)
  totalsum+=inc*item.price
  total.innerText=totalsum
  console.log(state.cart)
  renderCartItems(item, 1)
}

function renderStoreItems(){
  //const itemList=itemListUL.innerHTML

  for (let i = 0; i < state.items.length; i++){
    const item=state.items[i]
    const itemLi=document.createElement('li')
    itemLi.setAttribute('id', item.id)

    const itemDiv=document.createElement('div')
    itemDiv.setAttribute('class', 'store--item-icon')

    const itemImg=document.createElement('img')
    const imageSrc='assets/icons/'+item.id+'.svg'
    itemImg.setAttribute('src', imageSrc)
    itemImg.setAttribute('alt', item.name)

    itemDiv.appendChild(itemImg)

    itemLi.appendChild(itemDiv)

    const button=document.createElement('button')
    button.innerText='Add to cart'
    button.addEventListener('click', () => {handleClick(item,1)})
    itemLi.appendChild(button)

    
    itemListUL.appendChild(itemLi)
  }
}

const cartListUL= document.querySelector('.cart--item-list')





function renderCartItems(item, num){

  for (let i=0; i<cartListUL.children.length; i++){
    
    if (cartListUL.children[i].id===item.id){
      if (num===0){
        cartListUL.children[i].remove()
        return
      }
      cartListUL.children[i].children[2].innerText=num
      return
    }
    
  }

  const itemLi=document.createElement('li')
  itemLi.setAttribute('id', item.id)

  const itemImg=document.createElement('img')
  const imageSrc='assets/icons/'+item.id+'.svg'
  itemImg.setAttribute('src', imageSrc)
  itemImg.setAttribute('alt', item.name)

  itemLi.appendChild(itemImg)

  const minButton=document.createElement('button')
  minButton.innerText='-'
  minButton.setAttribute('class', 'quantity-btn remove-btn center')
  minButton.addEventListener('click', () => {handleClick(item,-1)})
  itemLi.appendChild(minButton)


  const itemSpan=document.createElement('span')
  itemSpan.setAttribute('class','quantity-text center')
  itemSpan.innerText=num
  itemLi.appendChild(itemSpan)

  const plusButton=document.createElement('button')
  plusButton.innerText='+'
  plusButton.setAttribute('class', 'quantity-btn add-btn center')
  plusButton.addEventListener('click', () => {handleClick(item,1)})

  itemLi.appendChild(plusButton)

  

  cartListUL.appendChild(itemLi)
  
}




function main(){
  renderStoreItems()

}

main()