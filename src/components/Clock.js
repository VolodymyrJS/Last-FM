import React from 'react';

class Clock extends React.Component {
    state = {
        timeDisplay: new Date().toLocaleString('de-DE'),
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                timeDisplay: new Date().toLocaleString('de-DE'),
            });
        }, 1000);
    }

    render() {
        return <span>{this.state.timeDisplay}</span>;
    }
}

export default Clock;
