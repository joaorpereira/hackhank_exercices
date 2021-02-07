function kangaroo(x1, v1, x2, v2) {
    if((v1 > v2) && (x2 - x1) % (v2 - v1) === 0) {
        return 'YES';
    }    
    return 'NO';
}

kangaroo(0, 2, 5, 3)

