export  const asc = (state)=>  state.sort(
    (a, b) => parseFloat(b.price) - parseFloat(a.price))
 export  const des = (state)=>  state.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price))