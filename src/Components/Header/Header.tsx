import React from 'react';
import './Header.css';
import { HeaderStates } from '../../Common/State/ui';

interface HeaderProps {
    userName: string;
}

class Header extends React.Component<HeaderProps, HeaderStates> {
    public constructor(props: HeaderProps) {
        super(props);
        this.state = {
            User: { Name: props.userName }
        };
    }

    public render() {
        return (
            <nav>
                {this.state.User.Name}
                <img src={this.state.User.Avator} alt="user avator" />
            </nav>
        );
    }
}

export default Header;
