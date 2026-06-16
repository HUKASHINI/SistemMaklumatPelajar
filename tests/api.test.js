import {describe,it,expect}
from 'vitest';

import {add}
from '../js/api.js';

describe('Tambah',()=>{

it('2 + 2 = 4',()=>{

expect(add(2,2)).toBe(4);

});

});