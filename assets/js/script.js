let array = []

document.addEventListener('DOMContentLoaded', async ()=>{    
    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const table = await response.json()
        // .then((content)=>{
        //     array = content
        // })
        array = table
        //console.log(array)
        
        return table
    }

    

  await getData().then((data) =>{
    //console.log(data)
    for(index of data){
        const table = document.querySelector('#t-body')
        const tr = document.createElement('tr')
        const td0 = document.createElement('td')
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        td0.innerHTML = index.name
        td1.innerHTML = index.username
        td2.innerHTML = index.email
        tr.appendChild(td0)
        tr.appendChild(td1)
        tr.appendChild(td2)
        table.appendChild(tr)
        
        

    }
    
  })

  
})

function search(){
    const table = document.querySelector('#t-body')
    table.innerHTML = ''
    const input = document.querySelector('#input-text').value.toLocaleLowerCase()
    const option = document.querySelector('select').value.toLocaleLowerCase()
    //console.log(option)
    //console.log(array)
    for(index of array){

        // console.log(input)
        // console.log(index.name)

        const name = index['name'].toLocaleLowerCase()
        const username = index['username'].toLocaleLowerCase()
        const email = index['email'].toLocaleLowerCase()

        let ricerca = ''

        if(option === 'name'){
            ricerca = name
        } else if(option === 'username'){
            ricerca = username
        } else {
            ricerca = email
        }

        if(ricerca.includes(input)){

            const tr = document.createElement('tr')
            const td0 = document.createElement('td')
            const td1 = document.createElement('td')
            const td2 = document.createElement('td')
            td0.innerHTML = index.name
            td1.innerHTML = index.username
            td2.innerHTML = index.email
            tr.appendChild(td0)
            tr.appendChild(td1)
            tr.appendChild(td2)
            table.appendChild(tr)
        }
        
    }
    //console.log(array)
}

