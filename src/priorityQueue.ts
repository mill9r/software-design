interface ITask {
    job(): void;
}

class Task implements ITask{
    private jobNumber: number;
    private date: number;

    constructor(jobNumber: number) {
        this.jobNumber = jobNumber;
        this.date = Date.now()
    }

    job() {
        console.log(`${this.jobNumber} : ${this.date}`);
    }
}

class PriorityQueue {
    private map = new Map();
    private priorityMin: number;
    private priorityMax: number;

    constructor(priorityMin: number, priorityMax: number) {
        this.priorityMin = priorityMin;
        this.priorityMax = priorityMax;
        this.priorityInitializer(priorityMin, priorityMax)
    }

    enqueue(element: ITask, priority: number) {
        this.map.get(priority).push(element);
    }

    poll(): ITask | undefined {
        let element: ITask | undefined;
        this.map.forEach(item => {
            if(item.length && element === undefined) {
                element = item.shift();
            }
        })
        return element;
    }

    priorityInitializer(priorityMin: number, priorityMax: number) {
        for(let i = priorityMin; i <= priorityMax; i++){
            this.map.set(i, []);
        }
    }

    getMinPriority() {
        return this.priorityMin;
    }

    getMaxPriority(){
        return this.priorityMax;
    }
}


class JobRunner {
    private jobTimer: number;
    private jobInterval: number;
    private queue: PriorityQueue;


    constructor(jobInterval: number, jobTimer: number, priorityQueue: PriorityQueue) {
        this.jobTimer = jobTimer;
        this.jobInterval = jobInterval;
        this.queue = priorityQueue;
    }

    runJob(): void {
        const interval = setInterval(() => {
            let job = this.queue.poll();
            if (job) {
                job.job();
            }
        }, this.jobInterval)


        setTimeout(() => clearInterval(interval), this.jobTimer);
    }
}

class JobGenerator {
    generatorInterval: number;
    jobTimer: number

    constructor(generatorInterval: number, jobTimer: number) {
        this.generatorInterval = generatorInterval
        this.jobTimer = jobTimer
    }

    generate(queue: PriorityQueue) {
        const interval = setInterval(() => {
            const randomValue = this.generateRandomValueInRange(queue.getMinPriority(),queue.getMaxPriority())
            const task = new Task(randomValue);
            queue.enqueue(task, randomValue);
        },this.generatorInterval);

        function timer(jobTimer: number) {
            setTimeout(() => clearInterval(interval), jobTimer);
        }

        timer(this.jobTimer);


    }

    generateRandomValueInRange(min: number, max: number){
        return Math.floor(Math.random() * (max + 1 - min)) + min
    }
}




const q = new PriorityQueue(1,3);
const job = new JobRunner(100, 2000, q);
const generator = new JobGenerator(90, 2000);

generator.generate(q);
job.runJob();





