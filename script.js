


    function update()
    {
       if(localStorage.getItem('itemsJson') == null)
       {
           itemJsonArray = [];
           localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray)) ;// creates the array and store it as string with key itemsJson
       }
       else
       {
                    itemJsonArrayStr = localStorage.getItem('itemsJson') 
                    itemJsonArray = JSON.parse(itemJsonArrayStr); 
       }

          // Populate the table
                let tableBody = document.getElementById("tablebody");
                let str = "";

                itemJsonArray.forEach((element, index) => {
                    str += `
                    <tr>
                    <td>${index + 1}</td>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td> 
                    <td><button class="btn btn-sm btn-primary DeleteTask" onclick="deleted(${index})">Delete</button></td> 
                    </tr>`; 
                });
                tableBody.innerHTML = str;

    }

    function getAndUpdate()
    {
        console.log("Updating List...");
                
                tit = document.getElementById('title').value;
                desc = document.getElementById('description').value;
                
                
                if (localStorage.getItem('itemsJson')==null){
                    itemJsonArray = [];
                    itemJsonArray.push([tit, desc]);
                    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
                }

                else{
                    itemJsonArrayStr = localStorage.getItem('itemsJson') // getting itemsjson string from the local storage
                    itemJsonArray = JSON.parse(itemJsonArrayStr); // parsing string to array ;
                    itemJsonArray.push([tit, desc]);    // pushing new elements to the array ;
                    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray)) // converting aray back to string with key itemsJson ;
                }
                update();
    }

    function deleted(itemIndex)
    {
                console.log("Delete", itemIndex);

                itemJsonArrayStr = localStorage.getItem('itemsJson')
                itemJsonArray = JSON.parse(itemJsonArrayStr);


                // Delete itemIndex element from the array
                itemJsonArray.splice(itemIndex, 1); // here 1 refers to removing of "1" element
                localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));

                update();
    }

                function clearStorage()
                {
                    if ( confirm("Do you areally want to clear?" ))
                    {
                    console.log('Clearing the storage')
                    localStorage.clear();
                    update();
                    }
                }   

                add = document.getElementById("add");
                add.addEventListener("click", getAndUpdate);
                update();

