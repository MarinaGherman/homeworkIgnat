import React from 'react'
import { AffairType } from "./HW2";
import {DeleteAffairCallbackPropsType} from "./Affairs";
import styles from './Affairs.module.css'
import {Button, Col, Row} from "antd";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: DeleteAffairCallbackPropsType
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id)

    return (
        <div className={styles.main}>
            <Row>
                <Col span={2}>
                    <span className={styles.name}>{props.affair.name}</span>
                </Col>
                <Col span={1}>
                    <span className={styles.priority}>[{props.affair.priority}]</span>
                </Col>
                <Col span={1}>
                    <Button className={styles.btn} onClick={deleteCallback} danger>
                        <span className={styles.close}>x</span>
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default Affair

