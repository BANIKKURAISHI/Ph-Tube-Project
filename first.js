
//////////////option api////////////////////////////////////////////////////////////////////////////////////
const  collection=async()=>{
  const other =await fetch(' https://openapi.programming-hero.com/api/videos/categories ')
  const data =await other.json()


 
 
 const contain =document.getElementById('contain')

    data.data.slice(0,4).forEach((category) => {
      console.log(data.data)
      const div=document.createElement('button')

div.innerHTML=`
<button  onclick="searchBar('${category.category_id}')"  id="modal" class="m-20 bg-neutral-300 p-4 rounded-md focus:bg-red-600" >${category.category}</button>
 `
contain.appendChild(div)})}



    


 /////////////////////category show api//////////////////////////////////////////////////////////////////////////
const searchBar = async(categoryId)=>{
  //console.log(categoryId.length)
  const response =await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
  const data =await response.json()

  const newData=data.data.length
  //console.log('data length:',newData)
  

  const section=document.getElementById('card')
  
  
    section.innerHTML=""

    const hidden=document.getElementById('A')
   
  if(newData===0){
   console.log('click')
   hidden.classList.remove('hidden')
    }
    else{
      hidden.classList.add('hidden')
    }

      
          
           // console.log(data.data)
            data.data?.forEach((profile) => {
            const div=document.createElement('div')
            div.innerHTML=`<div class="card w-80 bg-base-100 shadow-xl my-14 mx-8" >
          <figure><img src="${profile?.thumbnail}
           " class="w-full h-52"></img>
           </figure>
           <p class="text-right -my-10 text-white">${profile?.others.posted_date?Math.floor(profile?.others.posted_date*0.00277777778):'' }${profile?.others.posted_date?"hrs":''}
           ${profile?.others.posted_date?Math.floor(profile?.others.posted_date%3600/60):'' }${profile?.others.posted_date?"min ago":''}</p>
         </div>
         <div class="card-body text-justify">
         <div class="flex  >
         <figure class="text-left -mx-4"><img src="${profile?.authors[0].profile_picture}" class="w-24 h-24 rounded-full">
         </img>
         <div class ="mx-5 my-4">
         <h2 class="card-title">${profile?.title}</h2>
         <h3 class="picture">${profile?.authors[0].profile_name }
         <span>
          ${profile?.authors[0].verified ?'<i class="fa-solid fa-certificate">':'' }</i> </span>  </h3>
        <h4>${profile?.others.views } views</h4>
         </div>
         </figure>
          </div>
          </div>
         ` 
         section.appendChild(div)
      })
     }
 ////////////////////////////function call list
  searchBar('1000')
  collection()
 

 
