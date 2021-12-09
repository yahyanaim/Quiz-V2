const form = document.querySelector("form")
const level = document.getElementById("lev")
const questions = document.getElementById("que")
const reponse = document.getElementById("rep")
const min = document.getElementById("min")
const max = document.getElementById("max")
const butC = document.getElementById('createQ');
const tbody = document.querySelector(".tbody")
let question = new Question();

// creat
const creatPost = async (e) => {
    
    e.preventDefault();
                
                question.addData(level.value,questions.value,reponse.value,min.value,max.value)
}
butC.addEventListener('click', creatPost)

// show
const showposts = async () => {
    const getdata = question.getdata();
    getdata.then(dat => {
       dat.forEach(post => {
        tbody.innerHTML += `<tr>
        <th scop="row">${post.id}</th>
        <td>${post.Question}</td>
        <td>${post.Reponse}</td>
        <td>${post.Level}</td>
        <td>${post.Max}</td>
        <td>${post.Min}</td>
        <td><button value="${post.id}" class="detbtn btn btn-danger">DELETE</button></td>
        </tr>`   
       })

       const detbtn = document.querySelectorAll(".detbtn");
        detbtn.forEach(item => {
            item.addEventListener('click', async (e) => {
                question.deleteData(item.value);
            })
        })
    })

}
window.addEventListener('DOMContentLoaded', () => showposts ());

