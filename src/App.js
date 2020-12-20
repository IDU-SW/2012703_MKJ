import React, { Component } from 'react';
import movie from './movie.json';

class App extends Component {
  render() {
    const items = movie.Item.map((item, index) => {
      const casts = item.casts.map( (cast) => {
        return (
          cast + ","
        );
      });
      return (
        <ol key={index}>
          <h3> {index}. {item.name} </h3>
          <ul>
            <li> <b>장르</b>: {item.genre} </li>
            <li> <b>국가</b>: {item.country} </li>
            <li> <b>개봉일</b>: {item.opened} </li>
            <li> <b>감독</b>: {item.director} </li>
            <li> <b>출연진</b>: {casts} </li>
            <li> <b>등급</b>: {item.grade}세 이상 </li>
            <li> <b>링크</b>: <a href = {item.link} target = "self" > {item.link}</a> </li>
          </ul>
        </ol>
      );
    });
    return (
      items
    );
  }
}
export default App;
