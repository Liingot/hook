import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button, Input, List } from 'antd';
function CountHook() {
    const [count, setCount] = useState(1);  //count就是一个变量的意思，setCount定义了一个函数
    const [data, setDate] = useState(['1', '2', '3']);
    const [value, setValue] = useState("");
    useEffect(() => {
        console.log('componentDidMounte &&&  componentDidUpdate');
        let timer = setInterval(() => {
            console.log(123);
        }, 1000)
        return () => {  //componentWillUnmount,这里一般处理定时器，事件监听等等！！！要不然去别的页面还是会一直触发
            clearInterval(timer);
            timer = null
        }
    }, [data])
    return (
        <div>
            hook版本
            <button><Link to="/class">点击跳转class版本</Link></button>
            <p>
                <button onClick={() => { setCount(count + 1) }}>click me</button>
            </p>
            <p>
                当前步数:{count}
            </p>
            <Input placeholder="Basic usage" value={value} onChange={change} />
            <Button type="primary" onClick={add}>添加菜单</Button>
            <List
                bordered
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        {item
                        }
                    </List.Item>
                )}
            />
        </div>)
    function change(e) {
        setValue(e.target.value);
    }
    function add() {
        setDate([value, ...data]);
        setValue("");
    }
}
export default CountHook;