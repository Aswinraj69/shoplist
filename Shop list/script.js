const form = document.getElementById('shop-form');
const itemName = document.getElementById('item-name');
const itemQty = document.getElementById('item-qty');
const list = document.getElementById('list');
const alert = document.getElementById('alert')


document.addEventListener('DOMcontentLoaded',function(){
    const items = JSON.parse(window.localStorage.getItem('items'));
    items.forEaach(function(items){
        const tr = document.createElement('tr');
        tr.setAttribute('id',`${item.id}`)
        tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.qty}</td>
        <td><button class ="btn btn-danger">Delete</button></td>
        `;
        list.appendChild(tr)
    })
})


form.addEventListener('submit', function(event){
    event.preventDefault();
    if(itemName.value != '' && itemQty.value !=''){
        const tr = document.createElement('tr');
        const rand = Math.floor((Math.random()*1000)+1);
        tr.setAttribute('id',`${rand}`);
        tr.innerHTML =`
        <td>${rand}</td>
        <td>${itemName.value}</td>
        <td>${itemQty.value}</td>
        <td><button class="btn btn-danger">Delete</button></td>
        `;
        list.appendChild(tr);
        itemName.value = '';
        itemQty.value = '';
        alert.classList.add('alert-success');
        alert.innerHTML = 'item Added Successfully !'
         setTimeout(function(){
             alert.classList.remove('alert-success');
             alert.innerHTML = '';
         },2000)
    }else{
        alert.classList.add('alert-warning')
        alert.innerHTML ='please Add Items !'
        setTimeout(function(){
            alert.classList.remove('alert-warning');
            alert.innerHTML = '';
        },2000)
    }
    
})

//delete
list.addEventListener('click', function(event){
    if(event.target.classList.contains('btn')){
        event.target.parentElement.parentElement.remove()
        alert.classList.add('alert-danger');
        alert.innerHTML = 'item deleted successfully'
        setTimeout(function(){
            alert.classList.remove('alert-danger');
            alert.innerHTML = ''
        },2000)
        let items = JSON.parse(window.localStorage.getItem('items'))
        const id = event.target.parentElement.parentElement.getAttribute('id')
        items = items.filter(function(item){
            return item.id != id;
        })
        window.localStorage.setItem('items',JSON.stringify(items))
        event.target.parentElement.parentElement.remove()
    }
})

