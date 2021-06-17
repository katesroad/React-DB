# Redux

## Fundamentals

- What problem dose Redux solve?
  To solve the problem of accessing application state across components horitanally and vertically ---> makes our code look messy.

- How Redux works

  - Idea:
    - action (dispatch action)
    - reducer( reducer gives back a new state based on action)
    - state(state gets updated by reducer function)
      action -> reducer - state (Comparation with Vuex needed)
  - Comparation with Vuex: https://vuex.vuejs.org/#what-is-a-state-management-pattern

- Ducks pattern(A best file structure for using Redux)

  - What is it?: To store corresponding state code at the single place and seperate state from components so that all the component can access the state in the same way.
  - Goal: Makes our component to be much cleaner
  - State code is more readble and maintainable
  - Idea: to store actions, reducers and the state in a single file
  - Doc: https://github.com/erikras/ducks-modular-redux

* React-Redux

  - Goal: to access global state inside a component
  - Doc: https://react-redux.js.org/introduction/getting-started
  - useSelector: to get computed value from centeral state
  - useDispatch: to get _dispatch_

## References

- Redux: https://redux.js.org/
- React-Redux: https://react-redux.js.org/
- Duck Pattern: https://github.com/erikras/ducks-modular-redux
- State, Action and View in Vuex:https://vuex.vuejs.org/#what-is-a-state-management-pattern
- Redux Intro for beginer: https://www.youtube.com/watch?v=wcXTCG8zMhY
