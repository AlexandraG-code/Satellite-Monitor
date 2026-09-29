import {Form, Input} from "antd";
import {useForm} from "antd/es/form/Form";
import {IAuthModel} from "../model/types";

export default function AuthForm() {

    const [authForm] = useForm()

    const onSubmit = async (data: IAuthModel) => {


    }


    return (

        <Form form={authForm} layout="vertical" onFinish={onSubmit}>

            <Form.Item label={"Адрес почты"} name="email">
                <Input/>
            </Form.Item>
            <Form.Item label={"Пароль"} name="password" rules={[{required: true}]}>
                <Input.Password/>
            </Form.Item>


        </Form>
    )
}
