var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = 'The Button';
document.body.appendChild(btn);

// schijf hier tussen je code
var button = true;
function myfunction(){
    if (button === true){
        document.body.style.backgroundColor = "yellow";
        button = false;
    }
    else if (button === false) {
        document.body.style.backgroundColor = "white";
        button = true;
    }
}
btn.addEventListener('click', () => {
    myfunction()
})


// schijf hier tussen je code