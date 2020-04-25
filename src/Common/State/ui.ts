import User from '../Models/User';
import Movie from '../Models/Movie';

export interface AppStates {
    time: string;
}

export interface HeaderStates {
    User: User;
}

export interface CardListStates {
    Movies: Movie[];
}

export interface CardStates {
    Movie: Movie;
}
