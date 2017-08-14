import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
border-radius: 5px;
padding: 15px 25px;
font-size: 22px;
text-decoration: none;
margin: 20px;
color: #fff;
position: relative;
display: inline-block;
background-color: #55acee;
box-shadow: 0px 5px 0px 0px #3C93D5;
&:hover{
  background-color: #6FC6FF
}
&:active{
  transform: translate(0px, 5px);
  box-shadow: 0px 1px 0px 0px;
}
`;

const SearchButton = Button.extend`
background-color: green;
box-shadow: 0px 5px 0px 0px rgba(0%, 100%, 0%)
&:hover{
  background-color: #FF6656;
}
`;

const Search = (props) => {

    return (
      <div>
      <strong>Search for Team</strong>

      <div className="search">
        <form id="team-search-form" method="get" >
          <input id="team-search-box" type="text" name="title" placeholder="TEAM NAME" />
          <SearchButton onClick={props.searchByTeam}>
            Search
          </SearchButton>
        </form>
      </div>
      </div>
  );
};

export default Search;