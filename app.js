const btns = document.querySelectorAll('button')

for (const btn of btns) {
   btn.addEventListener('click', function(){
       this.style.backgroundColor = randomColor();
   })
}

const randomColor = () => {
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)
    return `rgb(${r}, ${g}, ${b})`
}