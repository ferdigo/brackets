module.exports = function check(str, bracketsConfig) {
    let opened = [];
    let closed = [];
    let holder = [];

    bracketsConfig.forEach((pair) => {
        opened.push(pair[0]);
        closed.push(pair[1]);
    });

    for (let char of str) {
        if (holder.includes(char) && closed.includes(char)) {
            holder.pop();
        } else if (opened.includes(char)) {
            holder.push(char);
        } else if (closed.includes(char)) {
            const ind = opened[closed.indexOf(char)];
            if (holder[holder.length - 1] === ind) {
                holder.pop();
            } else {
                holder.push(char);
            }
        }
    }
    return !holder.length;
};
