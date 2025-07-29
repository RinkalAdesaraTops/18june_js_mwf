let allData = []
document.getElementById('alldata').innerHTML = ''
const saveData = ()=>{
    let nm = document.getElementById('name').value
    let age = document.frm.age.value
    let sal = document.frm.salary.value
    let data = JSON.parse(localStorage.getItem('userinfo'))
    allData = data
    let len = (data!=null)? data.length+1 : 1;
    let obj = {
        id:len,
        name:nm,
        age:age,
        salary:sal
    }

    allData.push(obj)
    console.log(allData);
    localStorage.setItem("userinfo",JSON.stringify(allData))
    dispData()
}

const dispData = ()=>{
    let data = JSON.parse(localStorage.getItem('userinfo'))
    let tr = ''
    data.map((i)=>{
        // tr += "<tr><td>"+i.id+"</td>"
        // tr += "</tr>" 
        // template literal
        tr += `<tr>
                    <td>${i.id}</td>
                    <td>${i.name}</td>
                    <td>${i.age}</td>
                    <td>${i.salary}</td>
                    <td>
                        <button onclick="delData(${i.id})">Delete</button>
                    </td>
            </tr>`       
    })
    document.getElementById('alldata').innerHTML = tr
}
const delData = (id)=>{
    let data = JSON.parse(localStorage.getItem('userinfo'))
    //1 2  4 5 == id=3
    let res = data.filter((i)=>{
            return i.id != id
    })
    let j=1
    let newdata = res.map((i)=>{
            i.id = j++
            return i
    })
    
    localStorage.setItem("userinfo",JSON.stringify(newdata))
    dispData()
}
dispData()