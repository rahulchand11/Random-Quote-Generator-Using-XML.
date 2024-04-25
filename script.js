const startbtn = document.querySelector(".start");
const para = document.querySelector(".random-quote");
const author = document.querySelector(".author-name");
const apicall = function(){
    const URL = 'https://api.quotable.io/random';
    let xhr = new XMLHttpRequest();
    xhr.open('GET', URL, true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4) {
            const data = JSON.parse(this.responseText);
            console.log(data.content);
            para.innerHTML = `"${data.content}"`;
            author.innerHTML = `"${data.author}"`;
        }
    }
    xhr.send();
    // savedata();
    
}

startbtn.addEventListener("click", apicall);

 