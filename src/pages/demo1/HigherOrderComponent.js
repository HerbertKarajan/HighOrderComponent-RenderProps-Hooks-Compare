import React from 'react'
import {Button} from 'antd'
import getRandomColor from './ColorUtil'

function Count({count,add,minus,theme,changeTheme}) {

    return (
        <div style={{backgroundColor:theme,alignItems:'center',justifyContent:'center'}}>
            <span>You clicked {count} times</span>
            <Button type="primary" onClick={add} title={'add'} >添加</Button>
            <Button type="primary" onClick={minus} title={'minus'} >减少</Button>
            <Button type="primary" onClick={changeTheme} title={'ChangeTheme'} >更改主题颜色</Button>
        </div>
    );
}

const countNumber=(initNumber)=> (WrappedComponent)=>
    class CountNumber extends React.Component{
        state={count:initNumber};

        add=()=>this.setState({count:this.state.count+1});

        minus=()=>this.setState({count:this.state.count-1});

        render() {
            return <WrappedComponent
                {...this.props}
                count={this.state.count}
                add={this.add.bind(this)}
                minus={this.minus.bind(this)}
            />
        }
    };


const changeTheme=(initColor)=>(WrappedComponent)=> {
    class ChangeTheme extends React.Component {
        state = {
            theme: initColor
        };
        changeTheme = () => this.setState({theme: getRandomColor()});

        render() {
            return <WrappedComponent
                {...this.props}
                theme={this.state.theme}
                changeTheme={this.changeTheme.bind(this)}
            />
        }
    }

    ChangeTheme.displayName = `changeTheme(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return ChangeTheme;
};

export default changeTheme('white')(countNumber(0)(Count));