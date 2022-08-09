import React from 'react'
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import Title from "../ui/TItle/Title";
import styles from './Profile.styles.css'

const Profile = () => {
    return (
        <div className={styles.wrapper}>
            <Title children="Анкета"/>
            <div className={styles.group}>gg</div>
            <Form>
                <FormGroup row>
                    <Label for="exampleName" sm={2}>Ваше имя</Label>
                    <Col sm={10}>
                        <Input
                            id="exampleName"
                            name="name"
                            placeholder="Введите ваше имя"
                            type="text"
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="exampleSurname" sm={2}>Ваша фамилию</Label>
                    <Col sm={10}>
                        <Input
                            id="exampleSurname"
                            name="name"
                            placeholder="Введите вашу фамилия"
                            type="text"
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="exampleAge" sm={2}>Возраст</Label>
                    <Col sm={10}>
                        <Input
                            id="exampleAge"
                            name="name"
                            placeholder="Введите ваш возраст"
                            type="number"
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="exampleTel" sm={2}>Телефон</Label>
                    <Col sm={10}>
                        <Input
                            id="exampleTel"
                            pattern="[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                            name="name"
                            placeholder="8-800-555-35-35"
                            type="tel"
                        />
                    </Col>
                </FormGroup>

                <FormGroup tag="fieldset">
                        <FormGroup check>
                            <Input name="radio1" type="radio"/>
                            <Label check>Мужчина</Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input name="radio1" type="radio"/>
                            <Label check>Женщина</Label>
                        </FormGroup>
                </FormGroup>

                <FormGroup check>
                    <Input type="checkbox"/>
                    <Label check>
                        Я подтверждаю что ознакомился с
                        <a href="#"> Политикой конфиденциальности</a> и <a href="#">Пользовательским
                        соглашением</a>.
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Input type="checkbox"/>
                    <Label check>
                        Я подтверждаю что ознакоился и даю
                        <a href="#"> Согласие на обработку персональных данных.</a>
                    </Label>
                </FormGroup>
                <Button
                    color="primary"
                    className={styles.formBtn}>
                    Отправить
                </Button>
            </Form>
        </div>
    )
}

export default Profile
