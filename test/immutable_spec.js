import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutability', () => {
  describe('a number', () => {
    function increment(currentState) {
      return currentState +1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    })
  })

  describe('A List', () => {
    function addMovie(currentState, movie) {
      return currentState.push('Birds')
    }

    it('is immutable', () => {
      let state = List.of('Cats', "Dogs");
      let nextState = addMovie(state, 'Birds');

      expect(nextState).to.equal(List.of(
        'Cats',
        'Dogs',
        'Birds'
      ));

      expect(state).to.equal(List.of(
        'Cats',
        'Dogs'
      ));
    })
  })

  describe('a tree', () => {

    function addMovie(currentState, movie) {
      return currentState.update('movies', movies => movies.push(movie));
    }

    it('is immutable', () => {
      let state = Map({
        movies: List.of('Trainspotting', '28 Days Later')
      });
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later',
          'Sunshine'
        )
      }));
      expect(state).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later'
        )
      }));
    });

  });
})