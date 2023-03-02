import { Worker } from "./worker.js";


const worker1 = new Worker('Саша', 'Белый', '02-14-1990', 'ТимЛид');
const worker2 = new Worker('Валерия', 'Стаханова', '05-17-2000', 'Дизайнер');
const worker3 = new Worker('Дмитрий', 'Шпунько', '01-01-1995', 'ФронтЭнд');
const worker4 = new Worker('Евгения', 'Онегина', '11-20-1998', 'ДатаСайнс');
const worker5 = new Worker('Игорь', 'Береговой', '08-05-2002', 'БэкЭнд');


worker1.addDays(25);
worker2.addDays(20);
worker3.addDays(25);
worker4.addDays(18);
worker5.addDays(10);

worker1.rate = 3000
worker2.rate = 2000
worker3.rate = 1000

console.log(worker1.getSalary())
console.log(worker2.getSalary())
console.log(worker3.getSalary())


Worker.whoWorkedMore(worker1, worker2, worker3, worker4, worker5);
Worker.whoIsYounger(worker1, worker2, worker3, worker4, worker5);


