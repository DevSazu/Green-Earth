const categoriesTree=()=>{
 const url='https://openapi.programming-hero.com/api/categories';
 fetch(url)
 .then(res=>res.json())
 .then(data=>{
    showCategories(data.categories)
 })
}

const showCategories=(trees)=>{
 
    const cate=document.getElementById('categories')
    
     trees.forEach(tree => {
       const ul= document.createElement('ul')
        
       ul.innerHTML=`<li onclick="loadCtegori(${tree.id})" class="w-11/12 p-2 mx-auto block hover:text-white hover:bg-[#15803D] category-btn" id="btn-${tree.id}"> ${tree.category_name} </li>`
        cate.appendChild(ul)
       
     });
}

categoriesTree()


const treeDetails=()=>{
   const detailsUrl="https://openapi.programming-hero.com/api/plants"
   fetch(detailsUrl)
   .then(res=>res.json())
   .then(data=>{
      displayDetails(data.plants)
   })
}

const displayDetails=(cards)=>{
  const showTree=document.getElementById('tree_details')
   showTree.innerHTML="";
  
  cards.forEach(card =>{
     const div=document.createElement('div');
    
         div.innerHTML=`
                      <div class="card bg-base-100 w-full shadow-sm">
                        <figure>
                            <img src="${card.image} " class="h-[200px] w-full object-cover"
                                alt="Shoes" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                ${card.name}
                                
                            </h2>
                            <p class="h-[70px] pt-2 pb-2">${card.description}</p>
                             <div class="badge badge-secondary">${card.category}</div>
                            
                                <button class="btn bg-[#15803D] w-full text-white">Add to Cart</button>
                            
                        </div>
                    </div>
  `
   showTree.appendChild(div)
  });
  

}
treeDetails();

const loadCtegori=(id)=>{

   const allButtons=document.querySelectorAll(".category-btn");

   allButtons.forEach(btn=>{
      btn.classList.remove('bg-[#15803D]','text-white')
   });

   const activeBtn = document.getElementById(`btn-${id}`);
    if (activeBtn) {
        activeBtn.classList.add('bg-[#15803D]', 'text-white');
    }

   const catTreeurl=`https://openapi.programming-hero.com/api/category/${id}`
   fetch (catTreeurl)
   .then(res=>res.json())
   .then(data=>{
      showTreeByCategory(data.plants)
      
   })
}

const showTreeByCategory=(catTrees)=>{
   const showTree=document.getElementById('tree_details');
    showTree.innerHTML="";
  catTrees.forEach(catTree=>{
  
    const div=document.createElement('div');
    
         div.innerHTML=`
                      <div class="card bg-base-100 w-full shadow-sm">
                        <figure>
                            <img src="${catTree.image} " class="h-[200px] w-full object-cover"
                                alt="Shoes" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                ${catTree.name}
                                
                            </h2>
                            <p class="h-[70px] pt-2 pb-2">${catTree.description}</p>
                             <div class="badge badge-secondary">${catTree.category}</div>
                            
                                <button class="btn bg-[#15803D] w-full text-white">Add to Cart</button>
                            
                        </div>
                    </div>
  `
   showTree.appendChild(div)
   
  });
}