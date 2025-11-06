const loadCategories =async()=>{
    // fetch the data
   const response = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories");
    const data = await response.json();
    displayCategories(data.categories);
    
}

// {category_id: '1001', category: 'Music'}
const displayCategories =(categories)=>{
    // console.log(categories);
    const buttonContainer = document.getElementById("button-container");
   
    for(const category of categories){
        // console.log(category);
        // categoryDiv create
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML=`
               <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${category.category}</button>
        `
        buttonContainer.appendChild(categoryDiv);
    }
    
}
loadCategories();