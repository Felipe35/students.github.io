// const majors = [ 
//     {name:"Alice",major:"CIT",midterm:78,final:87},
//     {name:"Aaron",major:"CIT",midterm:68,final:81},
//     {name:"Abbie",major:"BUS",midterm:75,final:87},
//     {name:"Abbie",major:"BUS",midterm:75,final:87},
// ];


const displayData = function(data){
    const templateText = document.getElementById("majorTemplate").innerHTML;
    const compiledTemplateText = Handlebars.compile(templateText);

    let compiledHtml = compiledTemplateText({majors: data});
    document.getElementById("majorTable").innerHTML = compiledHtml;
}

async function getData(selectedMajor) {

    let response = await fetch("cit5students.json");
    if(response.ok){
        data = await response.json();
        let majorItems = data.filter(item => item.major === selectedMajor);
        displayData(majorItems);
    }else{
        document.getElementById("majorTable").innerHTML = "There was an error, or major items not found";
    }  
}





