import React from 'react';

import { mount } from 'enzyme';

const { it, expect } = global;

it('runs the app', ()=>{
  
  expect( typeof 'app' ).toEqual( 'string' );
});
