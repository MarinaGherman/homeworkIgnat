import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {changeThemeC, ThemeType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {

    const {theme} = useSelector((state: RootStateOrAny) => state.theme)
    const dispatch = useDispatch();

    const onChangeCallback = (value: ThemeType) => {
        dispatch(changeThemeC(value));
    };

    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperRadio
                name={'radio'}
                options={themes}
                value={theme}
                onChangeOption={onChangeCallback}
            />

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
