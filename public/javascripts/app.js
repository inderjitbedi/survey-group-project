(function (){

function start (){
    console.log("app started");

let deleteButton = document.querySelectorAll('.btn-danger')
for(button of deleteButton)
{
    button.addEventListener('click', (event)=> {
        if (!confirm("Are you sure")) {
            event.preventDefault();
            window.location.assign('/productList');
        } else {
            
        }
    })
}

}

window.addEventListener("load",start);


})();