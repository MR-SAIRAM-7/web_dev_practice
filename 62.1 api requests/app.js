const url = "http://universities.hipolabs.com/search?name="

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    let responseArr = await getCollegs(country);
    Show(responseArr)
});

function Show(responseArr) {
    let list = document.querySelector("#list");
    list.innerText  ="";
    for(college of responseArr){
        let li = document.createElement("li");
        li.innerText = college.name;
        list.appendChild(li);
    }    
}
async function getCollegs(country) {
    try {
        let responseArr = await axios.get(url + country);
        return responseArr.data;
    } catch (e) {
        console.log("Error = ", e);
        return [];
    }
}