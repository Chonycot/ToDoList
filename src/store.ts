import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './feature/todoList';
import themeReducer from './feature/themeList';
import { loadFromLocalStorage, saveToLocalStorage } from './helper/storage';


export const store = configureStore({
    reducer: {
        todoList: todoReducer,
        themeList: themeReducer
    }as Parameters<typeof configureStore>[0]['reducer'],
    preloadedState: loadFromLocalStorage()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


store.subscribe(() => saveToLocalStorage(store.getState()));