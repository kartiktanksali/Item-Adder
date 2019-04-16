const form = document.querySelector("#addForm")
const itemList = document.querySelector("#items")
const filter = document.querySelector("#filter")

//Event Listener for submit

form.addEventListener("submit",addItem)

//Delete Event

itemList.addEventListener("click",removeItem)

//Search Event
filter.addEventListener("keyup",searchItem)

function addItem(e){
	e.preventDefault()

	//Get input value

	const newItem = document.querySelector("#item")

	//Create new li element
	const li = document.createElement("li")
	//Add class
	li.className = "list-group-item"
	//Add Text node
	li.appendChild(document.createTextNode(newItem.value))

	//Delete Button Element
	const deleteB = document.createElement("button")

	//Add classes to delete button
	deleteB.className = "btn btn-danger btn-sm float-right delete"

	//Add Text Node
	deleteB.appendChild(document.createTextNode("X"))

	li.appendChild(deleteB)
	itemList.appendChild(li)
}


function removeItem(e){
	if(e.target.classList.contains("delete")){
		if(confirm("Are you sure want to delete?")){
			const li = e.target.parentElement
			itemList.removeChild(li)
		}
	}
}


function searchItem(e){
	//Convert to lower case
	let text = e.target.value.toLowerCase()

	const items = itemList.getElementsByTagName("li")
	

	//Conver it to array
	Array.from(items).forEach(function(item){
		const itemName = item.firstChild.textContent
		if(itemName.toLowerCase().indexOf(text) != -1){
			item.style.display = "block"
		}else {
			item.style.display = "none"
		}
	})

}