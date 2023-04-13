import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { HistoryStateType, history } from './slices/history-slice';
import { ThemeStateType, theme } from './slices/theme-slice';

export interface StateType {
  history: HistoryStateType;
  theme: ThemeStateType;
}

export const store = configureStore({
  reducer: {
    history,
    theme,
  },
});

type AppDispatchType = typeof store.dispatch;

export const useAppDispatch: () => AppDispatchType = useDispatch;

type RootStateType = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
