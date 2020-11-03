import React from 'react'
import {Button} from 'antd'
import getRandomColor from './ColorUtil'


class CountNumber extends React.Component{
    state={count:this.props.initNumber};
    add=()=>this.setState({count:this.state.count+1});
    minus=()=>this.setState({count:this.state.count-1});
    render(){
        return this.props.children({
            count: this.state.count,
            add: this.add.bind(this),
            minus:this.minus.bind(this)
        })
    }
}

class ChangeTheme extends React.Component{
    state={theme:this.props.initColor};
    changeTheme=()=>this.setState({theme:getRandomColor()});
    render(){
        return this.props.children({
            theme:this.state.theme,
            changeTheme:this.changeTheme.bind(this)
        });
    }
}

export default function RenderProps() {

    return (
        <ChangeTheme initColor={'white'}>
            {
                ({theme,changeTheme})=>
                <div style={{backgroundColor:theme,alignItems:'center',justifyContent:'center'}}>
                    <CountNumber initNumber={0}>
                        {
                            ({count,add,minus})=>
                            <>
                                <span>You clicked {count} times</span>
                                <Button type="primary" onClick={add} title={'add'} >添加</Button>
                                <Button type="primary" onClick={minus} title={'minus'} >减少</Button>
                                <Button type="primary" onClick={changeTheme} title={'ChangeTheme'} >更改主题颜色</Button>
                            </>
                        }
                    </CountNumber>
                </div>
            }
        </ChangeTheme>
    );
}