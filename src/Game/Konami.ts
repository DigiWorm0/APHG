export class Konami
{
    static state = 0;

    static sequence(keycode: number, func: Function, ...combo: number[])
    {
        if (keycode === combo[this.state]) {
            this.state++;
            if (this.state === combo.length)
            {
                func();
                this.state = 0;
            }
        }
    }

    static code(keycode: number, action: Function)
    {
        return this.sequence(keycode, action, 38, 38, 40, 40, 37, 39, 37, 39, 66, 65);
    }
} 