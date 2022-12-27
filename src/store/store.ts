import { configureStore } from '@reduxjs/toolkit';
import monthChangeSlice from './monthChangeSlice';
// import counterReducer from "./action-creators/counterSlice";
// import nameReducer from "./action-creators/showNameSlice";
// import windowReducer from "./action-creators/windowSlice";
// import itemsReducer from "./action-creators/itemsSlice";
// import postReducer from "./../features/posts/postsSlice";
// import userReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    monthChange: monthChangeSlice,
    // counter: counterReducer,
    // name: nameReducer,
    // closeRedWindow: windowReducer,
    // itemsList: itemsReducer,
    // posts: postReducer,
    // users: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
