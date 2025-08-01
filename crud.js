let allData = []
document.getElementById('alldata').innerHTML = ''
const saveData = ()=>{
    let nm = document.getElementById('name').value
    let age = document.frm.age.value
    let sal = document.frm.salary.value
    let id = document.frm.id.value
    let data = JSON.parse(localStorage.getItem('userinfo'))
    allData = data
    let len = (data!=null)? data.length+1 : 1;
    if(id!=''){
        //update
        allData = data.map((i)=>{
            if(i.id == id){
                i.name = nm
                i.age = age
                i.salary = sal
            }
            return i
        })
    } else {
        //insert
        let obj = {
            id:len,
            name:nm,
            age:age,
            salary:sal
        }
        allData.push(obj)
    }
    document.frm.reset()
    document.frm.id.value=''
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
                    <button onclick="editData(${i.id})">Edit</button>
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
const editData = (id)=>{
    let data = JSON.parse(localStorage.getItem('userinfo'))
    let res = data.find((i)=>{
            return i.id == id
    })
    console.log(res);
    document.getElementById('name').value = res.name
    document.frm.age.value = res.age
    document.frm.salary.value = res.salary
    document.frm.id.value = id
    // res[0].name
}
dispData()