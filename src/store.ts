import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './feature/todoList';
import { loadFromLocalStorage, saveToLocalStorage } from './helper/storage';



export const store = configureStore({
    reducer: {
        todoList: todoReducer
    },
    preloadedState: loadFromLocalStorage()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;




store.subscribe(() => saveToLocalStorage(store.getState()));