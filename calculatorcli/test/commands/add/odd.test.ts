import {expect, test} from '@oclif/test'

describe('add:odd', () => {
  test
  .stdout()
  .command(['add:odd'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['add:odd', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
