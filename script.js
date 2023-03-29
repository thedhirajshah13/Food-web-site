const select =document.querySelector('.select')
const option=document.querySelector('.option')
const year=document.querySelector('#year')
const flag=document.querySelectorAll('.flag')
const hey=document.querySelector('span')
// orders selection
select.addEventListener('click',()=>{
option.classList.toggle("option-design")
})
// generating flag name
flag.forEach((flag)=>{
    flag.addEventListener('mouseover',()=>{
        const id=flag.id
        
      console.log(flag)

    })
})

// generating year dynamicaly
const nyear=new Date()
year.innerHTML=`© ${nyear.getFullYear()}`