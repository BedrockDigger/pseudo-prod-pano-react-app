import React, { Component } from 'react'
import { Segment, Icon, Card, Progress, Header, Grid, Image, Button, Popup } from 'semantic-ui-react'
import Clock from 'react-live-clock';
import WikiNews from '../components/WikiNews'

export default function TextClock() {
  const getTimezone = () => Intl.DateTimeFormat().resolvedOptions().timeZone

  const timezone = getTimezone()
  return (
    <Grid
      centered
      fluid
    >
      <Grid.Column width={3} floated="right">
        <Segment textAlign="center">
          <Popup
          flowing hoverable
            trigger={
              <Header>
                <Clock
                  format="MMM D, YYYY"
                  timezone={timezone}
                />
              </Header>
            }
          >
            <WikiNews />
        </Popup>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}