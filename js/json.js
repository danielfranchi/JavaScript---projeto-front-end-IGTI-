async function arrayDevs(){
    const res = await fetch("http://localhost:3001/devs");
    const json = await res.json();


    v_array = json.map(busca => {

        const{name, picture, programmingLanguages} = busca;

        return{
            name: name,
            picture: picture,
            programmingLanguages: programmingLanguages
        }
    });
    console.log(v_array)
}