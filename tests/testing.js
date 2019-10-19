import { getJsFiles } from '../util/pathUtil';
import { meta } from './settings/testMeta';
import defaults from './settings/defaults';
import Sel from './lib/sel';


fixture `Testing`
  test.meta({ 
    ...meta.testing.jsimports,
  })('JS Imports', async t => {
    await t
    .expect(Sel).ok()
    .expect(defaults).ok()
    .expect(getJsFiles).ok()
  })