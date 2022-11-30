// Get JSON from web API
let xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    // Transform JSON into object/array
    let result = this.responseText;
    let data = JSON.parse(result);
    
    // Working with the object/array 
    console.log(data);
    const container = document.querySelector('.container');
    const myRow = document.querySelector('.row');

    for (let i = 0; i < data.list.length; i++) {
        // Add article element with class col-3
        const myArticle = document.createElement('article');
        myRow.appendChild(myArticle);
        myArticle.classList.add('col-12', 'col-xl-3');

        // Add div element with class card
        const myDiv1 = document.createElement('div');
        myArticle.appendChild(myDiv1);
        myDiv1.classList.add('card', 'text-bg-secondary', 'mb-3');
        myDiv1.style.setProperty('background-color', 'RGBA(108,117,125,var(--bs-bg-opacity,.7))', 'important');

        // Add div element with class card body
        const myDiv2 = document.createElement('div');
        myDiv1.appendChild(myDiv2);
        myDiv2.classList.add('card-body');

        // Add h6 element into card body
        const myH6 = document.createElement('h6');
        myDiv2.appendChild(myH6);
        
        // Add time content into myH6
        const time = data.list[i].dt_txt;
        myH6.innerText = time;

        // Add div with display flex to hold temperature and icon image
        const myDiv3 = document.createElement('div');
        myDiv2.appendChild(myDiv3);
        myDiv3.style.display = 'flex';
        myDiv3.style.alignItems = 'center';
        myDiv3.style.justifyContent = 'space-between';
        myDiv3.style.height = '60px';

        // Add h3 element with temperature value
        const myH3 = document.createElement('h3');
        myDiv3.appendChild(myH3);
        myH3.innerText = data.list[i].main.temp;
        myH3.innerHTML += '<sup>o</sup>C';

        // Add icon image
        const myImage = document.createElement('img');
        myDiv3.appendChild(myImage);
        myImage.src = `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`;

        // Add p element with description
        const myP = document.createElement('p');
        myDiv2.appendChild(myP);
        myP.innerText = data.list[i].weather[0].description;
    }
}

xhttp.open("GET", "https://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric");
xhttp.send();

// Set background image
document.querySelector('div').style.backgroundImage = 'url(./images/background.jpg)';
document.querySelector('div').style.paddingTop = '50px';
document.querySelector('div').style.paddingBottom = '50px';

