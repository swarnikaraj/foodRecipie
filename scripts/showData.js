

async function getData(url){


let res =await fetch(url)

let data=await res.json()

return data


}








function append(data,container){

container.innerHTML=null

data.forEach(({strMeal,strArea,strCategory,strInstructions,strMealThumb,strYoutube}) => {

let div=document.createElement('div')


let img=document.createElement('img')
img.src=strMealThumb

let p1=document.createElement('h1')
p1.innerHTML=strMeal
let p2=document.createElement('p')
p2.innerHTML= "Country:"+strArea

let p3=document.createElement('p')
p3.innerHTML="Category:"+strCategory

let p4=document.createElement('p')
p4.innerHTML="Instruction:"+strInstructions


container.append(img,p1,p2,p3,p4)

    
});


}




function appendreceipe(receipe_arr,cont){

    if (receipe_arr == undefined) { return false }

    receipe_arr.innerHTML = null

    receipe_arr.forEach((res) => {

      let  p = document.createElement('p')

        p.innerHTML = res.strMeal
        

        p.onclick = () => {
            function singleprod(res){
                localStorage.setItem('s_p', JSON.stringify(res))

                 window.location.href = 'singleprod.html'
            }

            singleprod(res)

        }

       cont.append(p)

    });

}



function appendlatest(data,container){

    container.innerHTML=null
    
    data.forEach(({strCategory,strCategoryDescription,strCategoryThumb}) => {
    
    let div=document.createElement('div')
    
    
    let img=document.createElement('img')
    img.src=strCategoryThumb
    
    let p1=document.createElement('h1')
    p1.innerHTML=strCategory

    
    
    let p2=document.createElement('p')
    p2.innerHTML="Instruction:"+strCategoryDescription
    
    div.append(img,p1,p2)
    container.append(div)
    
        
    });
    
    
    }












export {getData,append,appendreceipe,appendlatest}




