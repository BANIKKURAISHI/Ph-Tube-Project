let sort=[]
const blogButton=(ab)=>{
 window.location.href="http://127.0.0.1:5500/question.html"
}

const searchButton=async(id)=>{
  const response =await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
  const data =await response.json()
  data.data?.forEach((profile) => {
       const array=profile?.others.views.slice(0,3)
       //console.log(array)
       sort=array
      
    for(const number of sort){
     console.log(number)
     

     
    }
  
        
       })


  }
  

//https://openapi.programming-hero.com/api/videos/category/1000