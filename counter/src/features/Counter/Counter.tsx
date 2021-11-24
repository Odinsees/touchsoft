import Button from "../../Components/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {decrementCount, incrementCount, resetCount} from "./counter-reducer";
import {useState} from "react";
import style from './Counter.module.scss'

export const Counter = () => {

    const value = useSelector<AppRootStateType, number>(state => state.counter.value)
    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    const dispatch = useDispatch()

    const [error, setError] = useState(false)

    const incrementCountHandler = () => {
        dispatch(incrementCount())
        setError(false)
    }
    const decrementCountHandler = () => {
        if (value - 1 >= 0) {
            dispatch(decrementCount())
        } else {
            setError(true)
        }

    }
    const resetCountHandler = () => {
        dispatch(resetCount())
        setError(false)
    }

    const evenOrOddNumber = () => {
        if (value === startValue) {
            return 'start value'
        }
        if (value % 2 === 0 && value !== 0) {
            return 'even number'
        }
        if (value % 2 !== 0 && value !== 0) {
            return 'odd number'
        }
    }

    return (
        <div className={style.counterWrapper}>
            <div className={style.valueBlock}>
                <div className={style.value}>
                    {value}
                </div>
            </div>
            <div className={style.messageText}>
                {error
                    ? <span className={style.error}>negative numbers cannot be entered</span>
                    : <span>{evenOrOddNumber()}</span>
                }
            </div>
            <div className={style.buttonBlock}>
                <Button onClick={incrementCountHandler}>+</Button>
                <Button onClick={resetCountHandler}>Reset</Button>
                <Button onClick={decrementCountHandler} disabled={error}>-</Button>
            </div>
        </div>
    )
}