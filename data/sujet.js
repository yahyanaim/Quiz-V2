const form = document.querySelector("form")
const selectform = document.getElementById("mat")
const selectforme = document.getElementById("mod")
const tbody = document.querySelector(".tbody")
let sujet = new Sujet();

// creat
const creatPost = async (e) => {
    
    e.preventDefault();

                sujet.addData(selectform.value,selectforme.value) 
       
}
form.addEventListener('submit', creatPost)

// show
const showposts = async () => {

    const getdata = sujet.getdata();
    getdata.then(dat => {
       
       dat.forEach(post => {

        tbody.innerHTML += `<tr>
        <th scop="row">${post.id}</th>
        <td>${post.matiere}</td>
        <td>${post.model}</td>
        <td><button value="${post.id}" class="detbtn btn btn-danger">DELETE</button></td>
        </tr>`   
       })

       const detbtn = document.querySelectorAll(".detbtn");
        detbtn.forEach(item => {
            item.addEventListener('click', async (e) => {
                sujet.deleteData(item.value);
            })
        })
    })

}
window.addEventListener('DOMContentLoaded', () => showposts ());

