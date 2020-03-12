
class HashTable{
    constructor(size=53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0
        let WEIRD_PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100);i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            // console.log("------------value---------", value)
            total = (total*WEIRD_PRIME + value) % this.keyMap.length
        }
        // console.log("---------total-------", total)
        return Math.abs(total)
    }

    set(key, value) {
        let index = this._hash(key)
        if (!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
    }

    get(key) {
        let index = this._hash(key)
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++){
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i]
                }
            }
        }
        return undefined
    }

    values() {
        let valuesArr = []
        for (let i = 0; i < this.keyMap.length; i++){
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++){
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr
    }

    keys(){
        let keysArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
          if(this.keyMap[i]){
            for(let j = 0; j < this.keyMap[i].length; j++){
              if(!keysArr.includes(this.keyMap[i][j][0])){
                keysArr.push(this.keyMap[i][j][0])
              }
            }
          }
        }
        return keysArr;
    }
}


let ht = new HashTable(17);
ht.set("HI Dinesh","#800000")
ht.set("Sanath","#FFFF00")
ht.set("Ajit","#808000")
ht.set("salmon","#FA8072")
ht.set("Tanweer","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
ht.set("purple","#DDA0DD")
ht.set("violet", "#DDA0DD")

ht.keyMap.map(ele=>console.log(ele))


console.log(ht.get("Ajit"))

console.log(ht.values())
console.log(ht.keys())

ht.keys().forEach(function(key){
    console.log(ht.get(key));
})