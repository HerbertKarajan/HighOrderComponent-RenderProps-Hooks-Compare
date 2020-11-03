import React,{useState} from 'react'
import {Button} from 'antd'
import getRandomColor from './ColorUtil'

function CountNumber(initNumber) {
    const [count, setCount] = useState(initNumber);
    const addCount=()=> setCount(count + 1);
    const minusCount=()=>setCount(count -1);
    return [
        count,
        addCount,
        minusCount
    ]
}

function ChangeThemeFunc(initColor) {
    const [theme, changeTheme] = useState(initColor);
    const changeBackgroundColor=()=>changeTheme(getRandomColor())
    return [
        theme,
        changeBackgroundColor
    ]
}
function HookCount() {
    const [count,addCount,minusCount] = CountNumber(0);
    const [theme,changeBackgroundColor] = ChangeThemeFunc('white');
    return (
        <div style={{backgroundColor:theme,alignItems:'center',justifyContent:'center'}}>
            <span>You clicked {count} times</span>
            <Button type="primary" onClick={addCount} title={'add'} >添加</Button>
            <Button type="primary" onClick={minusCount} title={'minus'} >减少</Button>
            <Button type="primary" onClick={changeBackgroundColor} title={'ChangeTheme'} >更改主题颜色</Button>
        </div>
    );
}
export default HookCount