import React from 'react';
import './Stopwatch.css'

class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            elapsedTime: 0,
            previousTime: 0,
            animation: 'none',
            animationPlayState: 'paused',
        };

        this.onTick = this.onTick.bind(this);
        this.onStart = this.onStart.bind(this);
        this.onStop = this.onStop.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(this.onTick, 100);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onTick() {
        if (this.state.running) {
            let now = Date.now();
            this.setState({
                previousTime: now,
                elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
                animation: 'rotate 60s infinite linear',
                animationPlayState: 'running'
            });
        }
    }

    onStart() {
        this.setState({
            running: true,
            previousTime: Date.now(),
        })
    }

    onStop() {
        this.setState({
            running: false,
            animationPlayState: 'paused'
        })
    }

    onReset() {
        this.setState({
            running: false,
            previousTime: 0,
            elapsedTime: 0,
            animation: 'none',
        });
    }

    render() {
        const startBtn = <button className="stopwatch__start" onClick={this.onStart}>Старт</button>;
        const resetBtn = <button className="stopwatch__reset" onClick={this.onReset}>Обновить</button>;
        const stopBtn = <button className="stopwatch__stop" onClick={this.onStop}>Стоп</button>;

        let timer = new Date(this.state.elapsedTime);
        let timerMinutes = timer.getUTCMinutes().toString().padStart(2, '0');
        let timerSeconds = timer.getUTCSeconds().toString().padStart(2, '0');
        let timerMilliseconds = Math.floor(timer.getUTCMilliseconds() / 10).toFixed(0).toString().padStart(2, '0');

        let timerTime = `${timerMinutes}:${timerSeconds}:${timerMilliseconds}`;

        const handStyle = {
            animation: this.state.animation,
            animationPlayState: this.state.animationPlayState,
        };

        return (
            <div className="stopwatch__container">
                <div className="stopwatch">
                    <div className="stopwatch__buttons">
                        { this.state.running ? stopBtn : startBtn }
                        { resetBtn }
                        <div className="stopwatch__time">{timerTime}</div>
                    </div>
                    <div className="stopwatch__face">
                        <div className="stopwatch__hand-wrap">
                            <div className="stopwatch__anchor"></div>
                            <div style={handStyle} className="stopwatch__hand"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stopwatch;
