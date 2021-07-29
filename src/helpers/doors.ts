const createDoors = (amount: number, selected:number) =>{

    return Array.from({length: amount}, (_,i)=>{
    	
       const number = i+1

         const doorObj = {
            number: number,
            gotGift: (number === selected),
            isOpen: false,
            isSelected: false
        }
        
       return doorObj
        
    })
}



export default createDoors