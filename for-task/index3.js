let eded = parseInt (prompt ("Ədədi daxil edin:"));
let kok = 1;

for (let i = 1; i * i <= eded; i++) {
    kok = i;
}

alert(`Ədədin ən yaxın aşağı kökaltı dəyəri: ${kok}`)