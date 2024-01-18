import { FC } from "react";
import {Form, Icon, Input} from './MobileSearchForm.style'

const MobileSearchForm: FC = () => {


    return (
        <>
            <Form>
                <Icon></Icon>
                <Input placeholder="Search products, brands and categories"/>           
        </Form>
        </>
    )
}

export default MobileSearchForm