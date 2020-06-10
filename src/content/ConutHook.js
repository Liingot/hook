import React, { useState } from "react";
import { Button, Input, List } from 'antd';
function CountHook() {
    const [count, setCount] = useState(1);  //count就是一个变量的意思，setCount定义了一个函数
    const [data, setDate] = useState(['1', '2', '3']);
    const [value, setValue] = useState("");
    return (
        <div>
            hook版本
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