let id: string | number;

function displayId(id: string | number): void {
    if (typeof id === 'string') {
        console.log(`ID: ${id.toUpperCase()}`);
    } else if (typeof id === 'number') {
        console.log(`ID: ${id * 20}`);
    }
}

id = 'morgan1984';
displayId(id);

id = 10;
displayId(id);