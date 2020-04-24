import React from 'react';

interface HeaderProps {
    user: string;
}

class Header extends React.Component<HeaderProps> {
    private user: string;

    public constructor(props: HeaderProps) {
        super(props);
        this.user = props.user;
    }

    public render() {
        return <div></div>;
    }
}

export default Header;
