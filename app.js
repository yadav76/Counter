const value = document.querySelector('#value');
const button = document.querySelectorAll(".btn");

let count = 0;

button.forEach(function (btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++;
        }else{
            count=0;
        }

        if (count<0){
            value.style.color = "red";
        }
        if (count>0){
            value.style.color = "green";
        }
        if (count ==0){
            value.style.color = "black";
        }
        value.textContent = count;
    })
})
    

