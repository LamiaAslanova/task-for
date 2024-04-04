let eded = parseInt(prompt("Ədədi daxil edin:"));
let quvvet = 1;

for (let i = 0; quvvet < eded; i++) {
    quvvet *= 3;
}

if (quvvet === eded) {
    alert(`${eded} 3-ün qüvvətidir`);
} else {
    alert(`${eded} 3-ün qüvvəti deyil`);
}