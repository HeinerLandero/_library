export const SaveStorage = (key, element) =>{
    let elements = JSON.parse(localStorage.getItem(key));
    console.log(elements);
      if(Array.isArray(elements)){
        elements.push(element);
      }else{
        elements = [element];
      }
      localStorage.setItem(key, JSON.stringify(elements));
      return element;
}