function generaTarga() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    
    let targa = '';
    
    // Genera le prime 2 lettere
    for (let i = 0; i < 2; i++) {
        targa += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    targa += ' ';

    // Genera 3 numeri random
    for (let i = 0; i < 3; i++) {
        targa += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    
    targa += ' ';

    // Genera le ultime 2 lettere
    for (let i = 0; i < 2; i++) {
        targa += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    
    document.getElementById('targa').textContent = targa;
}