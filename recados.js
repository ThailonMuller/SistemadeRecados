let data = {
    adicionar: []
};

//ADD NOTAS
const add = document.getElementById("salvar");
add.addEventListener('click', (e)=>{
    e.preventDefault();

    const text_description = document.getElementById('text_description').value;
    const text_detail = document.getElementById('text_detail').value;

    data.adicionar.unshift({
        descrip: text_description, detail:  text_detail
    });

    saveData(data);
    addnotes();
    
    /* alert("Lançamento adicionado com sucesso."); */
});

function addnotes(){
    const add = data.adicionar;
    let addHtml = ``;

    if(add.length){
        add.forEach((item, index) => {
            addHtml += `
            <tr>
                <th>#</th>
                <th>${item.descrip}</th>
                <th>${item.detail}</th>
                <td class="b">
                    <button type="button"class="button green" ${index}">Editar</button>
                    <button type="button"class="button red" ${index}">Excluir</button>
                </td>                             
            </tr>  
          `
        })        
    }
    document.getElementById("list").innerHTML = addHtml; 
}

function saveData(data){
    localStorage.setItem(data.login, JSON.stringify(data));
};