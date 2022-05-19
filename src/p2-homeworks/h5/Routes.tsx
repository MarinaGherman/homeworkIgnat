import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus'
    // add paths
}

function Routes() {
    // @ts-ignore
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}

                <Route path={'/'}
                    // @ts-ignore
                       exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

                <Route
                    // @ts-ignore
                    exact path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>

                <Route
                    // @ts-ignore
                    exact path={PATH.JUNIOR} render={() => <Junior/>}/>

                <Route
                    // @ts-ignore
                    exact path={PATH.JUNIOR_PLUS} render={() => <JuniorPlus/>}/>


                // add routes

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route
                    // @ts-ignore
                    render={() => <Error404/>}/>

            </Switch>

        </div>
    )
}

export default Routes
