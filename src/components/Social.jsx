import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const SocialStyle = styled.div`
    margin: 0 auto;
    display: block;
`;

const SocialUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const SocialLi = styled.li`
    display: inline;
    margin: 0 1em 0 0;
`;

const SocialAnchor = styled.a`
    color: #212121;
    text-decoration: none;
    font-size: 1.2em;
`;

const SocialIcon = styled.i`
    color: ${ props => props.theme.color };
`;

const colores = [
    { name : 'facebook',    color:  "#3b5998" },
    { name : 'twitter',     color:  "#38a1f3" },
    { name : 'linkedin',    color:  "#0e76a8" },
    { name : 'github',      color:  "#333"    },
];

const getColor = (name) => {
    return colores.find( c => c.name == name );
}

const Social = props => (
    <SocialStyle>
        { props.social &&
            <SocialUl>
                {
                    props.social.map( (item,index) => (
                        <SocialLi key={ `Social-${index}` } >
                            <SocialAnchor href={ item.url } target="_blank">
                                <ThemeProvider theme={ getColor( item.name ) } >
                                    <SocialIcon  className={ `fa fa-${ item.name }` }></SocialIcon>
                                </ThemeProvider>
                            </SocialAnchor>
                        </SocialLi>
                    ))
                }
            </SocialUl>
        }
    </SocialStyle>
);

export default Social;