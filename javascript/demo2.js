let btn = document.querySelector('button');
btn.addEventListener('click', inputMsg);

function inputMsg()
{
    let name = prompt("enter name of student:");
    btn.textContent = 'Roll no1 :' + name;
}

