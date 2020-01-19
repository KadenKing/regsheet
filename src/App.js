import React, { useState, useEffect } from 'react';
import './App.css';
import { Layout, Breadcrumb, Row, Col, Input } from 'antd';
import EditableText from './components/EditableText';
import RegexTable from './components/RegexTable';
import { useSelector, useDispatch, Provider } from 'react-redux';
import setRegexAction from './actions/setRegex'
import store from './store';

const { Header, Content, Footer } = Layout

const isValidRegex = (regexString) => {
  try {
    new RegExp(regexString);
  } catch (e) {
    return false
  }

  return true
}


function App() {
  const dispatch = useDispatch()
  if (!dispatch) {
    alert('undefined!!')
  }
  const regex = useSelector(state => state.regex)
  const setRegex = (regex) => {
    dispatch(setRegexAction(regex))
  }

  const [text, setText] = useState("kaden:  25")
  const [results, setResults] = useState([])

  const changeRegex = (newRegex) => {
    if (isValidRegex(newRegex)) {
      setRegex(newRegex)
    }
  }

  useEffect(() => {
    if (regex === "") {
      setRegex("^$")
    }
  }, [regex])

  useEffect(() => {
    const re = new RegExp(regex, 'g')

    const matches = text.matchAll(re)
    setResults([...matches])
  }, [regex, text])

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
            {JSON.stringify(results)}
            <Row gutter={16} style={{ marginBottom: 16 }}>
              <Input defaultValue={regex} onChange={e => changeRegex(e.target.value)} placeholder="Regex"></Input>
            </Row>
            <Row gutter={16} style={{ marginBottom: 16, width: '100%' }}>
              <Col span={12}>
                <EditableText regex={regex} value={text} onChange={setText} />
              </Col>
              <Col span={12}>
                <RegexTable results={results} regex={regex} />
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
