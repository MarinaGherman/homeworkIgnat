import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import loader from './images/loader.gif'
import s from './hw10.module.css'

function HW10() {
    // useSelector, useDispatch
   const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        // dispatch
        // setTimeout
       dispatch(loadingAC(true))

        setTimeout(()=> {
            dispatch(loadingAC(false))
        },2000)
    };

    return (
        <div>
            <h3 className={s.subTitle}>  homeworks 10</h3>
            <hr/>
            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div>
                        <img style={{height: "35px"}} src={loader} alt="loader"/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
        </div>
    )
}

export default HW10
