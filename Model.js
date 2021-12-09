class Sujet {
    getdata = async () => {
        let url = 'http://localhost:3000/Sujet';
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const posts = await res.json();
      
        return posts
    }

    addData = async (matier, model) => {
        let url = 'http://localhost:3000/sujet';
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify({
                matiere : matier,
                model : model 
            })
        });
    }
    deleteData = async (id) => {
        let url = `http://localhost:3000/Sujet/${id}`;
        const res = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });
    }
    oneData = async (id) => {
        let url =`http://localhost:3000/Sujet/${id}` ;
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const posts = await res.json();
        console.log(posts)
        return posts
    }

}


class Question {
    getdata = async () => {
        let url = 'http://localhost:3000/Question';
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const posts = await res.json();
        return posts
    }

    addData = async (question, reponse, level, max, min) => {
        let url = 'http://localhost:3000/Question';
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify({
                Question : question,
                Reponse : reponse,
                Level : level,
                Max : max,
                Min : min

            })
        });
    }
    deleteData = async (id) => {
        let url = `http://localhost:3000/Question/${id}`;
        const res = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });
    }
    oneData = async (id) => {
        let url =`http://localhost:3000/Question/${id}` ;
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const posts = await res.json();
        return posts
    }
}
