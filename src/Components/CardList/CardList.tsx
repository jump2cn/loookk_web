import React from 'react';
import './CardList.css';
import Card from './Card/Card';
import { CardListStates } from '../../Common/State/ui';
import Movie from '../../Common/Models/Movie';

interface CardListProps {
    Movies: Movie[];
}

class CardList extends React.Component<CardListProps, CardListStates> {
    public constructor(props: CardListProps) {
        super(props);
        this.state = {
            Movies: props.Movies
        };
    }

    public render() {
        let cards = this.state.Movies.map((x) => <Card Movie={x}></Card>);
        return <div>{cards}</div>;
    }
}

export default CardList;
