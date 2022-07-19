// See https://www.zachtronics.com/quickserve/

declare global {
    type Color = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17;

    function clearScreen(): void;
    function drawText(text: string, color: Color, x: number, y: number): void;
    function drawTextWrapped(text: string, color: Color, x: number, y: number, width: number): void;
    function drawBox(color: Color, x: number, y: number, width: number, height: number): void;
    function fillArea(symbol: string, color: number, x: number, y: number, width: number, height: number): void;
    function saveData(data: string): void;
    function loadData(): string;
}

export {};
