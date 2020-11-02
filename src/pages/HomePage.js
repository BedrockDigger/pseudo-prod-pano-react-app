import React, { Component } from 'react'
import { Grid, Label, Button, Popup, Form, Header, Divider, Radio, Menu } from 'semantic-ui-react'
import util from 'util'

import Search from '../components/Search'
import Calendar from '../components/Calendar'
import './HomePage.css'

export default class HomePage extends Component {

  constructor(props) {
    super()
    this.engineCollection = [
      {
        key: 'google',
        name: 'Google',
        baseString: 'https://www.google.com/search?q=',
        iconName: 'google'
      },
      {
        key: 'bing',
        name: 'Bing',
        baseString: 'https://www.bing.com/search?q=',
        iconName: 'microsoft'
      },
      {
        key: 'duckduckgo',
        name: 'DuckDuckGo',
        baseString: 'https://duckduckgo.com/?q=',
        iconName: 'privacy'
      },
      {
        key: 'baidu',
        name: 'Baidu',
        baseString: 'https://www.baidu.com/s?wd=',
        iconName: 'dont'
      }
    ]
    if (localStorage.getItem('currentState')) {
      this.state = localStorage.getItem('currentState')
    }
    this.state = {
      engine: this.engineCollection[0],
      query: null,
      isLogoVisible: true,
      searchInNewWindow: false,
    }
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleRadioClick = this.handleRadioClick.bind(this)

  }

  componentDidUpdate() {
    localStorage.setItem('currentState', this.state)
  }

  handleMenuItemClick(e, d) {
    this.setState({ isLogoVisible: false })
    const engineName = d.content.toLowerCase()
    const engineObject = this.engineCollection.find(
      (i) => i.key == engineName
    )
    this.setState({
      engine: engineObject
    })
    setTimeout(() => {
      this.setState({
        isLogoVisible: true
      })
      console.log(this.state.isLogoVisible)
      console.log(engineObject)
    }, 100)
  }

  handleFormSubmit() {
    const s = this.state
    const address = s.engine.baseString + s.query
    console.log(s.engine)
    if (s.query == null) {
      //todo: made this look nicer (and more politer lol)
      alert('FILL THE DAMNED SEARCH BOX FIRST!')
      return 0
    }
    if (s.searchInNewWindow) {
      window.open(address, "_blank")
    }
    else (
      window.open(address, "_self")
    )
  }

  handleInputChange(e) {
    const queryString = e.target.value
    this.setState({
      query: queryString
    })
  }

  handleRadioClick() {
    this.setState((prevState) => ({
      searchInNewWindow: !prevState.searchInNewWindow
    }))
    console.log("state:" + this.state.searchInNewWindow)
  }

  render() {
    const s = this.state
    return (
      <div className="section">
        <div className="home wrapper">
          <div className="header wrapper">
            <TopHeader />
          </div>
          <div className="content wrapper">
          <div className="cal wrapper">
          <Calendar />
            </div>
            <div className="search wrapper">
              <Search
                formSubmit={this.handleFormSubmit}
                inputChange={this.handleInputChange}
                hpState={this.state}
              />
            </div>
          </div>
          <div className="footer wrapper">
            <Footer
              menuItemClick={this.handleMenuItemClick}
              radioClick={this.handleRadioClick}
              engine={s.engine.key}
              newWindow={s.searchInNewWindow}
            />
          </div>
        </div>
      </div>
    )
  }
}

function TopHeader() {
  return (
    <Grid>
      <Grid.Column floated="left" width={2}>
        <Label content="PANO" size="large" icon="star" />
      </Grid.Column>
      <Grid.Column floated="right" width={2} textAlign="right">
        <Label content="ver." detail="0.0.1" size="large" />
      </Grid.Column>
    </Grid>
  )
}

function Footer(props) {
  const p = props
  return (
    <Grid divided>
      <Grid.Column textAlign="right" width={3}>
        <Button circular color='facebook' icon='facebook' />
        <Button circular color='twitter' icon='twitter' />
        <Button circular color='linkedin' icon='linkedin' />
        <Button circular color='google plus' icon='google plus' />
      </Grid.Column>
      <Grid.Column textAlign="left" width={1}>
        <Popup
          trigger={<Button circular icon='setting' />}
          position="top left"
          flowing
          hoverable
        >
          <Menu vertical secondary compact>
            <Menu.Item header content="Preferred search engine" />
            <Menu.Item
              content="Google"
              onClick={p.menuItemClick}
              active={p.engine == 'google'}
            />
            <Menu.Item
              content="Bing"
              onClick={p.menuItemClick}
              active={p.engine == 'bing'}
            />
            <Menu.Item
              content="DuckDuckGo"
              onClick={p.menuItemClick}
              active={p.engine == 'duckduckgo'}
            />
            <Menu.Item
              content="Baidu"
              onClick={p.menuItemClick}
              active={p.engine == 'baidu'}
            />
            <Divider />
            <Menu.Item fitted>
              <Radio
                label='Search in new tab'
                slider
                checked={p.newWindow}
                onClick={p.radioClick}
              />
            </Menu.Item>
          </Menu>
        </Popup>
      </Grid.Column>
    </Grid>
  )
}