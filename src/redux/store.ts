import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TodoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/*
import { configureStore } from "@reduxjs/toolkit";: This line imports the configureStore function from the Redux Toolkit. configureStore is a helper function that simplifies the setup of a Redux store, including integrating middleware and Redux DevTools.

import todoReducer from "./TodoSlice";: This line imports the todoReducer from a local file called TodoSlice. The todoReducer will handle state changes related to "todo" items in your application.

export const store: This line declares and exports a constant named store. By exporting it, the store can be imported and used in other parts of the application.

configureStore({ reducer: { todo: todoReducer, } }): This function call sets up the Redux store. It accepts an object with configuration options.

reducer: { todo: todoReducer }: This specifies the root reducer object for the store. In this case, the todo property of the state will be managed by the todoReducer. The structure indicates that you can add more reducers for other parts of the state by including them in this object.

export type RootState = ReturnType<typeof store.getState>: This line exports a TypeScript type alias named RootState. ReturnType<typeof store.getState> infers the type of the state returned by the store.getState function, which represents the entire Redux state tree. This is useful for providing type safety in your application when accessing the state.
Infer the `RootState` and `AppDispatch` types from the store itself

export type AppDispatch = typeof store.dispatch: This line exports a TypeScript type alias named AppDispatch. typeof store.dispatch infers the type of the dispatch function from the store. This type can be used to ensure that any dispatched actions are correctly typed.
Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
*/