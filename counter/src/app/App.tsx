import React from 'react';
import './App.module.scss';
import {Counter} from "../features/Counter/Counter";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {oddOrEvenNumber} from "../features/Counter/counter-reducer";
import style from './App.module.scss'

function App() {

    const oddOrEven = useSelector<AppRootStateType, oddOrEvenNumber>(state => state.counter.oddOrEven)
    const value = useSelector<AppRootStateType, number>(state => state.counter.value)

    const backGroundColor = () =>{
        if(oddOrEven === oddOrEvenNumber.oddNumber){
            return `${style.odd} + ${style.App}`
        }
        if(oddOrEven === oddOrEvenNumber.evenNumber || value === 0){
            return `${style.even} + ${style.App}`
        }
    }

    return (
        <div className={backGroundColor()}>
            <Counter/>
        </div>
    );
}

export default App;
