import React, { Component } from 'react'
import { Input, Label, Menu } from 'stardust'

// TODO: Update <Input> usage after its update to v1 API

export default class Vertical extends Component {
  state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical>
        <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
          <Label color='teal'>1</Label>
          Inbox
        </Menu.Item>

        <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
          <Label>51</Label>
          Spam
        </Menu.Item>

        <Menu.Item name='updates' active={activeItem === 'updates'} onClick={this.handleItemClick}>
          <Label>1</Label>
          Updates
        </Menu.Item>
        <Menu.Item>
          <Input className='icon' icon='search' placeholder='Search mail...' />
        </Menu.Item>
      </Menu>
    )
  }
}
