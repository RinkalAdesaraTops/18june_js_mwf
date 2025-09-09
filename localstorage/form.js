let data = []
const addData = ()=>{
    let nm = document.frm.name.value
    let ag = document.frm.age.value
    let obj = {
        "id":1,
        "name":nm,
        "age":ag
    }
    data.push(obj)
    console.log(data);
    localStorage.setItem("alldata",JSON.stringify(data ))
}