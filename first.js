const  collection=async()=>{
  const other =await fetch(' https://openapi.programming-hero.com/api/videos/categories ')
  const data =await other.json()

 
 console.log(data.data)  
 const contain =document.getElementById('contain')
 data.data.slice(0,4).forEach((category) => {
  const div=document.createElement('button')
  div.innerHTML=`
  <button class="m-20 bg-neutral-300 p-4 rounded-md" onclick="searchBar('${category.category_id}')" >${category.category}</button>
   `
  contain.appendChild(div)
 })


};
 
const searchBar = async(categoryId)=>{
  
  const response  =await fetch(`https://openapi.programming-hero.com/api/videos/category/ ${categoryId} `)
  const data =await response.json()
  console.log(data.data)
  const section=document.getElementById('card')
  section.innerHTML=""
  data.data?.forEach((profile) => {
    
    
    const div=document.createElement('div')
    div.innerHTML=`<div class="card w-96 bg-base-100 shadow-xl" >
   
    <figure><img src="${profile?.thumbnail}" class="w-full h-52"></img></figure>
  </div>
  <div class="card-body text-justify">
  <div class="flex >
  <figure class="text-left -mx-4"><img src="${profile?.authors[0].profile_picture}" class="w-24 h-24 rounded-full">
  </img>
  <div class ="mx-5">
  <h2 class="card-title">${profile?.title}</h2>
  <h3>${profile?.authors[0].profile_name } </h3>
  <span>${profile?.authors[0].verified   }</span>
  <h4>${profile?.others.views } views</h4>
  </div>
  </figure>
  
  </div>
   </div>
  
  `
  

    section.appendChild(div)})

console.log(data.data)
}


 collection()
 searchBar('1000')