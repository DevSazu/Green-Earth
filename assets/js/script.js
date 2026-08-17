const categoriesTree=()=>{
 const url='https://openapi.programming-hero.com/api/categories';
 fetch(url)
 .then(res=>res.json())
 .then(data=>{
    showCategories(data.categories)
 })
}

const showCategories=(trees)=>{
 
    const ul=document.getElementById('categories')
    
     trees.forEach(tree => {
       const li= document.createElement('li')
        li.className='w-11/12 p-2 max-auto block hover:text-white hover:bg-[#15803D]'
       li.innerHTML=`${tree.category_name}`
        ul.appendChild(li)
        console.log(ul)
     });
}

categoriesTree()