function init() {
    const tableData = document.getElementById('tableData');
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            const names = data.map(item => item.name);
            console.log(names);
            ["nitin", "sharma"]

            names.forEach(name => {
                // created html node for each name
                const tr = document.createElement('tr');
                const td = document.createElement('td');
                td.appendChild(document.createTextNode(name));

                tr.appendChild(td);

                tableData.appendChild(tr);
            });
        });
}

// on loading for script
(() => {
    init();
})()


const searchTxt = document.getElementById('search');
searchTxt.addEventListener('keyup', function () {
    const searchValue = searchTxt.value;
    const tdList = document.getElementsByTagName('td');
    console.log(tdList);
    for (let index = 0; index < tdList.length; index++) {
        const item = tdList[index];
        // table current value in lower case
        const currentText = item.innerText.toLowerCase();  
        // user eneterd value in lower case
        const searchText = searchValue.toLowerCase(); 

        if (currentText.includes(searchText)) {
            item.style.display = 'tabel-cell';
        } else {
            item.style.display = 'none';
        }
    }
});


