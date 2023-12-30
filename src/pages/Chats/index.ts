import Block from '../../utils/Block';
import template from './chats.hbs';
// import { render } from '../../utils/render';


export class ChatsPage extends Block {
  constructor() {
    super({
      type: 'button',
      // onClick: () => { render('profile') },
      users: [
        {
          name: 'Владимир',
          avatar: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDZ8fGFuaW1hbHN8ZW58MHx8fHwxNzAwMjA4ODg0fDA&ixlib=rb-4.0.3&q=80&w=400'
        },
        {
          name: 'Катя',
          avatar: 'https://images.unsplash.com/photo-1574068468668-a05a11f871da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDd8fGFuaW1hbHN8ZW58MHx8fHwxNzAwMjA4ODg0fDA&ixlib=rb-4.0.3&q=80&w=400'
        },
        {
          name: 'Петя',
          avatar: 'https://images.unsplash.com/photo-1504006833117-8886a355efbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDEzfHxhbmltYWxzfGVufDB8fHx8MTcwMDIwODg4NHww&ixlib=rb-4.0.3&q=80&w=400'
        },
        {
          name: 'Иван',
          avatar: 'https://images.unsplash.com/photo-1551946581-f7a62cd2f00b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDIyfHxhbmltYWxzfGVufDB8fHx8MTcwMDIwODg4NHww&ixlib=rb-4.0.3&q=80&w=400'
        },
        {
          name: 'Света',
          avatar: 'https://images.unsplash.com/photo-1500349812227-3264f5f54181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDIxfHxhbmltYWxzfGVufDB8fHx8MTcwMDIwODg4NHww&ixlib=rb-4.0.3&q=80&w=400'
        },
        {
          name: 'Нина',
          avatar: 'https://images.unsplash.com/photo-1470093851219-69951fcbb533?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDMwfHxhbmltYWxzfGVufDB8fHx8MTcwMDIwODg4NHww&ixlib=rb-4.0.3&q=80&w=400'
        }
      ]

    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
