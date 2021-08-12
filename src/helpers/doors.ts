const createDoors = (amount: number, prizeDoor:number) =>{

    return Array.from({length: amount}, (_,i)=>{
    	
     const number = i+1

     const doorObj = {
        number: number,
        gotGift: (number === prizeDoor),
        isOpen: false,
        isSelected: false
     }
        
       return doorObj
        
    })
}



export default createDoors