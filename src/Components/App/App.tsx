import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { AppStates } from '../../Common/State/ui';
import CardList from '../CardList/CardList';
import Movie from '../../Common/Models/Movie';

interface AppProps {
    title: string;
}

class App extends React.Component<AppProps, AppStates> {
    public readonly title: string = 'Title';
    public readonly Movies: Movie[];

    public constructor(props: AppProps) {
        super(props);
        this.title = props.title;
        this.Movies = [
            { Title: 'aaa', Time: 120, Director: [], Authors: [] },
            { Title: 'bbb', Time: 120, Director: [], Authors: [] }
        ];
    }

    public render() {
        return (
            <div className="App">
                <Header userName="jump2cn"></Header>
                <CardList Movies={this.Movies}></CardList>
            </div>
        );
    }
}

export default App;
