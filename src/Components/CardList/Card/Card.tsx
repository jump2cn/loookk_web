import React from 'react';
import './Card.css';
import { CardStates } from '../../../Common/State/ui';
import Movie from '../../../Common/Models/Movie';

interface CardProps {
    Movie: Movie;
}

class Card extends React.Component<CardProps, CardStates> {
    public constructor(props: CardProps) {
        super(props);
        this.state = {
            Movie: props.Movie
        };
    }

    public render() {
        return (
            <div>
                <span>{this.state.Movie.Title}</span>
                <span>{this.state.Movie.TitleEng}</span>
                <span>{this.state.Movie.Time}分钟</span>
            </div>
        );
    }
}

export default Card;
