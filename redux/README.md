# Redux

## Fundamentals

- What problem does Redux solve?
  To solve the problem of accessing application state across components horizontally and vertically -> makes our code look messy.

- How Redux works

  - Idea:
    - action (dispatch action)
    - reducer( reducer gives back a new state based on the action)
    - state(state gets updated by reducer function)
      action -> reducer - state (Comparation with Vuex needed)
  - Comparison with Vuex: https://vuex.vuejs.org/#what-is-a-state-management-pattern

- Ducks pattern(The best file structure for using Redux)

  - What is it?: To store corresponding state code in a single place and separate state from components so that all the components can access the state in the same way.
  - Goal: Makes our component to be much cleaner
  - State code is more readable and maintainable
  - Idea: to store actions, reducers, and the state in a single file
  - Doc: https://github.com/erikras/ducks-modular-redux

* React-Redux

  - Goal: to access global state inside a component
  - Doc: https://react-redux.js.org/introduction/getting-started
  - useSelector: to get computed value from the central state
  - useDispatch: to get _dispatch_

## Advanced

### Concepts:
  - [Side effect](<https://en.wikipedia.org/wiki/Side_effect_(computer_science)>)
  - A Redux store doesn't know anything about async logic.
  - **Redux middleware was designed to enable writing logic that has side effects. Redux reducers must never contain "side effects."**

### Redux Middleware

- redux middleware
  - Flow: Action -> **middleware** -> reducer -> state ->view -> dispatch -> Action
  - Explaintaion: Redux recuers must never contains _side effects_
- [redux saga](https://redux-saga.js.org/)
  - Working flow:
    - Redux action dispatched from component -> "Watcher Saga" -> handler calls a function to make the request
    - getUser -> watcher => handleGetUser => requestGetUser

### Test Redux

- Test Redux: https://redux.js.org/recipes/writing-tests
  - Testing categories
    - action creator: https://redux.js.org/recipes/writing-tests#action-creators
    - reducer: https://redux.js.org/recipes/writing-tests#reducers
    - components: https://redux.js.org/recipes/writing-tests#components
    - midlleware: https://redux.js.org/recipes/writing-tests#middleware
  - Data faker: https://www.npmjs.com/package/faker
- Test Redux-Saga: https://redux-saga.js.org/docs/advanced/Testing

### Using Redux with Typescript

- Define the **RootState** type in redux

  - code:

  ```ts
  export type RootState = ReturnType<typeof store.getState>
  ```

  - Doc: https://redux.js.org/recipes/usage-with-typescript#define-root-state-and-dispatch-types

## References

### Redux fundamentals

- Redux: https://redux.js.org/
- React-Redux: https://react-redux.js.org/
- Duck Pattern: https://github.com/erikras/ducks-modular-redux
- State, Action and View in Vuex:https://vuex.vuejs.org/#what-is-a-state-management-pattern
- Redux Intro for beginner: https://www.youtube.com/watch?v=wcXTCG8zMhY

### Advanced Redux

- Redux middleware to be explained:

  - Official Doc: https://redux.js.org/tutorials/fundamentals/part-6-async-logic#redux-async-data-flow
  - Video Tutorial: https://www.youtube.com/watch?v=AgO7YcJeBh4

- Redux-saga:
  - Doc: https://redux-saga.js.org/
  - ES6 generator function: https://es6.ruanyifeng.com/#docs/generator
  - Video tutorial: https://www.youtube.com/watch?v=1K26DIKt3w8
