## it's a deck of cards. nothing fancy

### install

```yarn add react-deck-o-cards```


### use

```js
import { Hand, Card, CardBack } from 'react-deck-o-cards';

//...

const defHandStyle = {
  maxHeight:'34vh',
  minHeight:'34vh',
  
  maxWidth:'100vw',
  padding: 0,
};

// ...

render(){
  return (
    <Hand cards={[
      { rank: 1, suit: 0 },
    ]} hidden={false} style={defHandStyle} />
  );
}
```




## notices / thanks

card svg suits from

https://github.com/htdebeer/SVG-cards

# thanks eh!

(if this notice doesn't fulfill the LGPL, please notify me!)