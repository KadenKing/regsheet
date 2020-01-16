import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Breadcrumb, Row, Col, Input, Typography, Table } from 'antd';
import EditableText from './components/EditableText';
import RegexTable from './components/RegexTable';

const {Header, Content, Footer} = Layout

const isValidRegex = (regexString) => {
  try {
    new RegExp(regexString);
} catch(e) {
    return false
}

return true
}


function App() {
  const [regex, setRegex] = useState("")
  const [text, setText] = useState("Editable Text")

  const changeRegex = (newRegex) => {
    if (isValidRegex(newRegex)) {
      setRegex(newRegex)
    }
  }

  return (
    <div className="App">
      <Layout>
        <Header>
          header
        </Header>
      <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        <Row gutter={16} style={{marginBottom: 16}}>
          <Input placeholder={regex} onChange={e => changeRegex(e.target.value)} placeholder="Regex"></Input>
        </Row>
      <Row gutter={16} style={{marginBottom: 16, width: '100%'}}>
        <Col span={12}>
          <EditableText regex={regex} value={text} onChange={setText}>

          </EditableText>
        </Col>
        <Col span={12}>
        <RegexTable regex={regex}/>
        </Col>
      </Row>
        
      </div>

    </Content>
      </Layout>
      <Footer>Foot</Footer>
    </div>
  );
}

export default App;
