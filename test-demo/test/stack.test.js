class Stack{
    constructor(){
        this.top = -1;
        this.items = {};
    }
    get peek(){
        return this.items[this.top];
    }

    push(value){
        this.top += 1;
        this.items[this.top] = value;
    }
    pop(value){
        this.items[this.top] = this.items[this.top - 1]
        this.top -= 1;
    }
}

describe('My Stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    })
    it('is created empty', () => {
        const stack = new Stack();

        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });

    it('it can push', () => {
        stack.push('2');
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('2');
    });

    it('it can pop', () => {
        stack.push('2');
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe('2');
        stack.pop('2');
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });
})