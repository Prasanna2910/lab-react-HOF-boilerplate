import React, { useState } from 'react';
import '../App.css';

function HigherOrderComponent() {
  let [state, setState] = useState([
    { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
    { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
    { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
    { id: '4', name: 'Sam', user_type: 'Entreprenuer', age: 58, years: 25 },
    { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 },
  ]);

  return (
    <div>
      <h2>Display all items</h2>
      <div style={{ border: '1.5px solid black', textAlign: 'center' }}>
        {state.map(function (element, index) {
          // console.log(element,"P")

          return (
            <div key={index} className="flex1">
              <div>
                Id: {element.id}
                {'  '}
              </div>
              <div>
                Name: {element.name}
                {'  '}
              </div>
              <div>User-Type: {element.user_type}</div>
            </div>
          );
        })}
      </div>
      <hr />
      <h2>Display based on user type</h2>
      <div style={{ border: '1.5px solid black', textAlign: 'center' }}>
        {state
          .filter(function (element, index) {
            return element.user_type == 'Designer';
          })
          .map(function (element, index) {
            // console.log(element,"P")

            return (
              <div key={index} className="flex2">
                <div>
                  Id: {element.id}
                  {'  '}
                </div>
                <div>
                  Name: {element.name}
                  {'  '}
                </div>
                <div>
                  User-Type: {element.user_type}
                  {'  '}
                </div>
              </div>
            );
          })}
      </div>
      <hr />
      <h2>Filter all data starting with "J"</h2>
      <div style={{ border: '1.5px solid black', textAlign: 'center' }}>
        {state
          .filter(function (element, index) {
            return element.name[0] == 'J';
          })
          .map(function (element, index) {
            return (
              <div key={index} className="flex3">
                <div>
                  Id: {element.id}
                  {'  '}
                </div>
                <div>
                  Name: {element.name}
                  {'  '}
                </div>
                <div>
                  User-Type: {element.user_type}
                  {'  '}
                </div>
              </div>
            );
          })}
      </div>
      <hr />
      <h2>
        Filter all data based on age greater than 28 annd age less than or equal
        to 50
      </h2>
      <div style={{ border: '1.5px solid black', textAlign: 'center' }}>
        {state
          .filter(function (element, index) {
            return element.age >= 28 && element.age <= 50;
          })
          .map(function (element, index) {
            return (
              <div key={index} className="flex4">
                <div>
                  Id: {element.id}
                  {'  '}
                </div>
                <div>
                  Name: {element.name}
                  {'  '}
                </div>
                <div>
                  User Type: {element.user_type}
                  {'  '}
                </div>
              </div>
            );
          })}
      </div>
      <hr />
      <h2>Find the total years of the designers</h2>
      <div style={{ border: '1.5px solid black'}}>
        {state
          .filter(function (element, index) {
            return element.user_type == 'Designer';
          })
          .reduce(function (acc, curr) {
            let x = acc + curr.years;
            console.log(x);

            return x;
          }, 0)}
      </div>
    </div>
  );
}
export default HigherOrderComponent;
