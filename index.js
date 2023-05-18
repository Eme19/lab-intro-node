
class  SortedList {
  constructor(items,length) {
    this.items=[];
    this.length=0;

  }


  add(item) {
    this.items.push(item);
    this.length++;
   return this.items.sort(function(x,y) {
   
   if(x < y){
     return -1;
   }
   if(x > y){
     return 1;
   }
   return 0;
  });

 }

  get(pos) {
   this.items ;
   this.length++
  
    if(pos >= this.items.length){
      throw new Error('OutOfBounds');
     
    }
      return  this.items[pos];
    
  }

  max() {

    // this.items.reduce((a,b) => {
      if( this.length === 0){
        throw new Error ("EmptySortedList")
      }else{
        return this.items[this.length -1] ;
      }
      
   // })
  }

  min() {
   if (this.length === 0){
    throw new Error ("EmptyStoredList")
   }
   else{
      return this.items[0];
   }
  }

  sum() {
  return this.items.reduce((a,b) => a + b, 0)
  }


  avg() {
    // this.items.reduce((total, amount) => {
    //   if(total.length == amount){
    //     throw new Error ("EmptySortedList")
    //   }else{
    //     return total / amount ;
    //   }
    this.sum()
    if(this.length === 0){
      throw new Error ("EmptyStoredList");
    }
    else{
      return this.sum () / this.length;
    }

  }
      
   // })
}


module.exports = SortedList;
