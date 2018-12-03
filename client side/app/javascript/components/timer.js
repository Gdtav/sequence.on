import AccurateTimer from "accurate-timer-js"

class Timer {
    constructor(time, repeat) {
        this.cur = 0;
        this.callBacks = [];
        this._timeUnit = time;
        this._timer = new AccurateTimer(() => {
            this.callBacks.forEach(elem => elem(this.cur % repeat));
            this.cur++;
        }, this._timeUnit * 1000);
    }

    registerCallback(cb) {
        if (this.callBacks.indexOf(cb) === -1)
            this.callBacks.push(cb);
    }

    removeCallback(cb) {
        if (this.callBacks.indexOf(cb) !== -1)
            this.callBacks.splice(this.callBacks.indexOf(cb), 1);
    }

    start() {
        this._timer.start();
    }

    stop() {
        this._timer.stop();
    }

    timeUnits(i) {
        return this._timeUnit * i;
    }
}

export default Timer;