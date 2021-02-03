export default class Scanner{
    public next(): string{
        // @ts-ignore
        return Deno.args;
    }
}