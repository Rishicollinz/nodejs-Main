module.exports = class Square{
    constructor(width){
        this.width=width;
    }
    area(){
        return this.width*2;
    }
    perimeter = (a) => {
        return 4 * a;
    }
}
