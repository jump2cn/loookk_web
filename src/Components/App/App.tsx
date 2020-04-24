import React from 'react';
import './App.css';

interface AppProps {
    title: string;
}

class App extends React.Component<AppProps> {
    public readonly title: string = 'Title';

    public constructor(props: AppProps) {
        super(props);
        this.title = props.title;
    }

    public render() {
        return <div className="App">{this.title}</div>;
    }
}

export default App;
