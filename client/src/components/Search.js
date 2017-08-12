import React from 'react';

const Search = (props) => {

    return (
    <section id="kickIt-search">
      <strong>Search by:</strong> Team <em>or</em> Player

      <div className="search">
        <form id="team-search-form" method="get" onSubmit={props.handleSubmit}>
          <input id="team-search-box" type="text" name="title" placeholder="TEAM NAME" />
          <input onClick={props.searchByTeam} type="submit" value="Search" />
          
        </form>
      </div>

      <div className="search">
        <form id="player-search-form" method="get">
          <input id="player-search-box" type="text" name="id" placeholder="PLAYER NAME" />
          <input onClick={props.searchByPlayer} type="button" value="Search" />
        </form>
      </div>

    </section>
  );
};

export default Search;