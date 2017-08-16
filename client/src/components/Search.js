import React from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

const Button = styled.a`
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 22px;
  text-decoration: none;
  margin: 20px;
  color: #fff;
  position: relative;
  display: inline-block;
  background-color: green;
  box-shadow: 0px 5px 0px 0px rgba(0%, 100%, 0%)
  &:hover{
    background-color: #FF6656;
  }
  &:active{
    transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
  }
`;

const SearchHeader = styled.div`
  font-family: 'Alfa Slab One', cursive;
`;

const Search = (props) => {
    const handleClick = (e, history) => {
      props.history.push('/team');
      props.searchByTeam();
    };

    return (
      <div>
      <SearchHeader>
      <strong>Search for Team</strong>
      </SearchHeader>

      <div className="search">
        <form id="team-search-form" method="get" >
          <input id="team-search-box" type="text" name="title" placeholder="TEAM NAME" />
          <Button onClick={handleClick}>
            Search
          </Button>
        </form>
      </div>
      </div>
  );
};

export default withRouter(Search);