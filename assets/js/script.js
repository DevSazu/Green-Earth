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


const treeDetails=()=>{
   const detailsUrl="https://openapi.programming-hero.com/api/category/1"
   fetch(detailsUrl)
   .then(res=>res.json())
   .then(data=>{
      displayDetails(data.plants)
   })
}

const displayDetails=(cards)=>{
  const showTree=document.getElementById('tree_details')
  
  cards.forEach(card =>{
     const div=document.createElement('div');
         div.className="card bg-base-100 w-full shadow-sm";
         div.innerHTML=`
                      <div class="card bg-base-100 w-full shadow-sm">
                        <figure>
                            <img src="${card.image} " class="h-[200px] w-full"
                                alt="Shoes" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                ${card.name}
                                
                            </h2>
                            <p class="h-[50px] pt-2 pb-2">${card.description}</p>
                             <div class="badge badge-secondary">${card.category}</div>
                            
                                <button class="btn bg-[#15803D] w-full text-white">Add to Cart</button>
                            
                        </div>
                    </div>
  `
   showTree.appendChild(div)
  });
  

}
treeDetails();