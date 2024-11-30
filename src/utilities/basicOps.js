export default function basicOps(currentCategory,sortDir,search,products,pageNum,pageSize){

let filteredArr = products
    if(search != ""){
        filteredArr = filteredArr.filter((product)=>{
            return product.title.toLowerCase().includes(search.toLowerCase())
        })
    }

    let filteredSortedArr = filteredArr;
    if(sortDir != 0){
        if (sortDir == 1){
             filteredSortedArr.sort(inComperator)
        }else{ 
             filteredSortedArr.sort(deComperator)
        }
    }

    let filteredSortedGroupByArr = filteredSortedArr;
    if (currentCategory != "All Categories"){
        filteredSortedGroupByArr = filteredSortedGroupByArr.filter((products)=>{
            return products.category == currentCategory
        })
    }
    /************************pagenation******************/
    const totalPages = Math.ceil((filteredSortedGroupByArr.length) / pageSize)
    let startIndex = (pageNum - 1)*pageSize
    let endIndex = startIndex + pageSize
    filteredSortedGroupByArr = filteredSortedGroupByArr.slice(startIndex,endIndex)

    return {filteredSortedGroupByArr,totalPages}
}

const inComperator = (product1,product2) =>{
    if (product1.price > product2.price){
        return 1
    }else{
        return -1
    }
}

const deComperator = (product1,product2)=>{
    if(product1.price < product2.price){
        return 1
    }else{
        return -1
    }
}