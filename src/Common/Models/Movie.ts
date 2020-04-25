import { People } from './People';

export default interface Movie {
    Title: string;
    TitleEng?: string;
    Subtitle?: string;
    SubtilteEng?: string;
    Time: number;
    Covers?: string[];
    Director: People[];
    Authors: People[];
}
