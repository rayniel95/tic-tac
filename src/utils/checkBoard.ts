function checkVerticals(board: string[]): string {
    for (let col of Array(3)) {
        let times = 0;
        for (let boardIndex of Array(3).map((_, index: number) => col + index * 3)) {
            if (board[boardIndex] == board[col]) {
                times++;
            }
        }
        if (times == 3) {
            return board[col];
        }
    }
    return "";
}

function checkHorizontal(board: string[]): string {
    for (let col of Array(3).map((_, index: number) => index * 3)) {
        let times = 0;
        for (let boardIndex of Array(3)) {
            if (board[boardIndex] == board[col]) {
                times++;
            }
        }
        if (times == 3) {
            return board[col];
        }
    }
    return "";
}

function checkX(board: string[]): string {
    function check(row: number[]): string {
        for (let index of row) {
            if (board[index] != board[0]) {
                return "";
            }
        }
        return board[0]
    }
    const X1 = check([0, 4, 8]);
    const X2 = check([2, 4, 6]);

    return X1 ? X1 : X2;
}

export function haveWinner(board: string[]): string{
    const vertical = checkVerticals(board);
    const horizontal = checkHorizontal(board);
    const x = checkX(board);

    if(vertical) return vertical;
    if(horizontal) return horizontal;
    return x;
}

export function end(board: string[]): boolean{
    for(let number of board){
        if(!isNaN(Number(number))) return false;
    }
    return true;
}