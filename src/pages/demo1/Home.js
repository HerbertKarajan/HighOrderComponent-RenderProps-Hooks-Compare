import React, { Component } from 'react'
import { Button,message } from 'antd'
import Hoc from './HigherOrderComponent'
import Hk from './Hook'
import Rp from './RenderProps'

class HomePage extends Component {

    tipF = ()=> {
        message.warning({
            content:'此按钮只是用来做个提示demo',
            duration:3,
            style: {
                marginTop: '40vh',
            },
        });
    }
    render() {
        return (
            <React.Fragment>
                <Button type="primary" onClick={this.tipF}>来，看一下高阶组件HOC，renderProps模式，Hook模式</Button>
                <Hoc />
                <Rp />
                <Hk />
            </React.Fragment>
        )
    }
}
export default HomePage;