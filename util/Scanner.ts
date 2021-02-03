export default class Scanner{
    private scaQueue: string[] = [];
    constructor() {
        for(let e of Deno.args){
            this.scaQueue.push(e);
        }
    }
    public next(): string{
        if (this.scaQueue.length > 0){
            let sh = this.scaQueue.shift();
            if(typeof sh === "string"){
                return sh;
            }
        }
        return "";
    }
}