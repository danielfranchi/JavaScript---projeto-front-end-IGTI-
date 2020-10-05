
window.addEventListener('load', start);

function start(){
    preventFormSubmit();
    arrayDevs()
}

function preventFormSubmit(){
    
    function handleFormSubmit(e){
        e.preventDefault();
    }
    
    document.querySelector('form').addEventListener('submit', handleFormSubmit);
}


document.querySelector('#Java').addEventListener('input', verificarCheckBox);
document.querySelector('#JavaScript').addEventListener('input', verificarCheckBox);
document.querySelector('#Python').addEventListener('input', verificarCheckBox);

function verificarCheckBox(e) {
 
    let id = e.target.id;

    let javaCheckbox = document.querySelector('#Java');
    let javaScriptCheckbox = document.querySelector('#JavaScript');
    let pythonCheckbox = document.querySelector('#Python');

    if(!e.target.checked){
        if(id === 'Java'){
            const center = document.querySelector('#center');
            center.innerHTML = '';
        }else if(id === 'JavaScript'){
            const center = document.querySelector('#center');
            center.innerHTML = '';
        }else if(id === 'Python'){
            const center = document.querySelector('#center');
            center.innerHTML = '';
        }
    }

    if(javaCheckbox.checked === true){
        busca(javaCheckbox.value);
    }else if(javaScriptCheckbox.checked === true){
        busca(javaScriptCheckbox.value);
    }else if(pythonCheckbox.checked === true){
        busca(pythonCheckbox.value);
    }
    
    function busca(dados){
        filterLanguage = v_array.filter((busca) => {
            return busca.programmingLanguages[0].language === dados
        });
        
        console.log(filterLanguage)
        montar(filterLanguage)
    }
}

function montar(filterLanguage){
    const center = document.querySelector('#center');

    for(i = 0; i < filterLanguage.length; i++){
        const name = filterLanguage[i].name
        const imagem = filterLanguage[i].picture

        const section = document.createElement("section");
        
        const p = document.createElement("p");
        p.textContent = name;
        section.appendChild(p);

        const img = document.createElement("img");
        img.src = imagem;
        section.appendChild(img);

        center.appendChild(section);
    }
}

document.querySelector('#texto').addEventListener('change', input);

function input(){
    const input = document.querySelector('#texto').value
    
    if(input === ' ' || input === ''){
        return;
    }else{
        inputSearch(input)
    }
    
    function inputSearch(input) {
        filteredUsers = v_array.filter((user) => {
          return user.name.toLowerCase().includes(input.toLowerCase());
        });
    }
    console.log(filteredUsers);
    input_Search(filteredUsers);

    function input_Search(filteredUsers){
        const center = document.querySelector('#center');

        for(i = 0; i < filteredUsers.length; i++){
            const name = filteredUsers[i].name
            const imagem = filteredUsers[i].picture
    
            const section = document.createElement("section");
            
            const p = document.createElement("p");
            p.textContent = name;
            section.appendChild(p);
    
            const img = document.createElement("img");
            img.src = imagem;
            section.appendChild(img);
    
            center.appendChild(section);
        }
    }

    document.querySelector('#texto').value = '';
    document.querySelector('#texto').focus();
}