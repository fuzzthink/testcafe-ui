import { meta } from './settings/testMeta';


fixture `Testing`
  test.meta({ 
    ...meta.testing2.ok,
  })('Test Testcafe API - ok/not', async t => {
    await t
    .expect(1).ok()
    .expect(false).notOk()
  })

  test.meta({ 
    ...meta.testing2.contains,
  })('Test Testcafe API - contains/not', async t => {
    await t
    .expect([1, 2]).contains(1)
    .expect([1, 2]).notContains(0)
  })