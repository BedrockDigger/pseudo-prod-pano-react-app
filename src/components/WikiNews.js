import { render } from '@testing-library/react'
import React, { Component } from 'react'
import { Feed, Placeholder, Grid, Input, Image, Dropdown, Transition, Popup, Item, Icon } from 'semantic-ui-react'
import axios from 'axios'

export default class WikiNews extends Component {
  constructor(props) {
    super()
    this.state = {
      ready: false
    }
  }

  componentWillMount() {
    this.setState({
      data: {
        date: "June 27",
        url: "http://wikipedia.org/wiki/June_27",
        data: {
          Events: [
            {
              year: "1759",
              text: "General James Wolfe begins the siege of Quebec.",
              links: [
                {
                  title: "James Wolfe",
                  link: "http://wikipedia.com/wiki/James_Wolfe"
                },
                {
                  title: "Quebec",
                  link: "http://wikipedia.com/wiki/Quebec"
                }
              ]
            }
          ],
          Births: [
            {
              year: "2009",
              text: "Fayette Pinkney, American singer (The Three Degrees) (b. 1948)",
              links: [
                {
                  title: "Fayette Pinkney",
                  link: "http://wikipedia.com/wiki/Fayette_Pinkney"
                },
                {
                  title: "The Three Degrees",
                  link: "http://wikipedia.com/wiki/The_Three_Degrees"
                }
              ]
            }
          ],
          Deaths: [
            {
              year: "2013",
              text: "Peter Waieng, Papua New Guinea politician (b. 1966)",
              links: [
                {
                  title: "Peter Waieng",
                  link: "/wiki/Peter_Waieng"
                }
              ]
            }
          ]
        }
      }
    })
    this.setState({ ready: true })
    console.log(this.state.data)
  }

  render() {
    const s = this.state
    if (s.ready) {
      console.log(s.ready)
      var date = s.data.date
      var events = s.data.data.Events
      var births = s.data.data.Births
      var deaths = s.data.data.Deaths
    }
    console.log(events.map((it) => {
      <Feed.Event>
        <Feed.Label>
          <Icon name="newspaper" />
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            {it.text}
          </Feed.Summary>
          <Feed.Date>
            {date + ", " + it.year}
          </Feed.Date>
        </Feed.Content>
      </Feed.Event>
    }))
    return (
      this.state
        ?
        <Feed>
          {
            events.map((it) => {
              <Feed.Event>
                <Feed.Label>
                  <Icon name="newspaper" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    {it.text}
                  </Feed.Summary>
                  <Feed.Date>
                    {date + ", " + it.year}
                  </Feed.Date>
                </Feed.Content>
              </Feed.Event>
            })
          }
          {/* <Feed.Event
            icon='newspaper'
            date='Nov 1, 2989'
            summary="General James Wolfe begins the siege of Quebec."
          />
          <Feed.Event
            icon='birthday'
            date='Nov 1, 1234'
            summary="General James Wolfe begins the siege of Quebec."
          />
          <Feed.Event
            icon='bed'
            date='Nov 1, 6356'
            summary="General James Wolfe begins the siege of Quebec."
          /> */}
        </Feed>
        :
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
    )
  }
}

const testJson = () =>
  (
    {
      date: "June 27",
      url: "http://wikipedia.org/wiki/June_27",
      data: {
        Events: [
          {
            year: "1759",
            text: "General James Wolfe begins the siege of Quebec.",
            links: [
              {
                title: "James Wolfe",
                link: "http://wikipedia.com/wiki/James_Wolfe"
              },
              {
                title: "Quebec",
                link: "http://wikipedia.com/wiki/Quebec"
              }
            ]
          }
        ],
        Births: [
          {
            year: "2009",
            text: "Fayette Pinkney, American singer (The Three Degrees) (b. 1948)",
            links: [
              {
                title: "Fayette Pinkney",
                link: "http://wikipedia.com/wiki/Fayette_Pinkney"
              },
              {
                title: "The Three Degrees",
                link: "http://wikipedia.com/wiki/The_Three_Degrees"
              }
            ]
          }
        ],
        Deaths: [
          {
            year: "2013",
            text: "Peter Waieng, Papua New Guinea politician (b. 1966)",
            links: [
              {
                title: "Peter Waieng",
                link: "/wiki/Peter_Waieng"
              }
            ]
          }
        ]
      }
    }
  )