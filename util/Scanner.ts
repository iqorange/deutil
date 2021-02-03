export default class Scanner{
    private scaQueue: string[] = [];
    constructor() {
        for(let e of Deno.args){
            this.scaQueue.push(e);
        }
    }

    public hasNext(): boolean{
        if (this.scaQueue.length > 0){
            return true;
        }else{
            return false;
        }
    }

    public next(): string{
        if (this.hasNext()){
            let sh = this.scaQueue.shift();
            if(typeof sh === "string"){
                return sh;
            }
        }
        return "";
    }

    public nextNumber(): number | undefined{
        if (this.hasNext()) {
            let sh = this.scaQueue.shift();
            if (!isNaN(Number(sh))) {
                return Number(sh);
            }
        }
    }
}