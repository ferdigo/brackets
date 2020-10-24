module.exports = function check(str, bracketsConfig) {
    let opened = [];
    let closed = [];
    let holder = [];

    bracketsConfig.forEach(pair => {
        opened.push(pair[0]);
        closed.push(pair[1])
    });

    console.log('opened = ', opened)
    console.log('closed = ', closed)
  
    for (let char of str) {
          
         if (opened.includes(char)) {
            holder.push(char);
          
        }
        if (closed.includes(char)) {
          // console.log(char)
            if (holder.length != 0) {
              let ind = closed.findIndex(item => item === char)
              console.log(ind)
              console.log(holder[ind])
                holder.pop(holder[ind])
            } else return false

        }

    }
console.log(holder)
    return true;
};
