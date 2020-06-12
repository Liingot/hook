import React, { Component } from "react"

import { Button, Input, List } from 'antd';

class CountClass extends Component {
    constructor(props) {
        super(props);
        this.handle = this.handle.bind(this);
        this.state = { count: 1, data: ["注册", '登录', '首页'], value: "" } //默认值为1
    }
    render() {
        const { count, data, value } = this.state
        return (
            <div>
                class版本
                <p>
                    <button onClick={this.handle}>click me</button>
                </p>
                <p>
                    当前步数:{count}
                </p>
                <Input placeholder="Basic usage" value={value} onChange={this.change.bind(this)} />
                <Button type="primary" onClick={this.add.bind(this)}>添加菜单</Button>
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
            </div>
        )
    }
    handle() {
        this.setState({
            count: this.state.count + 1
        })
    }
    change(event) {
        this.setState({
            value: event.target.value
        })
    }
    add() {
        let value = this.state.value;
        this.setState({
            data: [value, ...this.state.data],  //合并数组
            value: ''
        })
    }
}
export default CountClass;