import { expect, test } from '@oclif/test'

describe('add', () => {
  test
    .stdout()
    .command(['add', "20", "20"])
    .it('should be equal to 40', ctx => {
      expect(ctx.stdout).to.contain('40')
    })

  test
    .stdout()
    .command(['add', "20", "20.2"])
    .it('should round numbers to integers, so we obtain 40', ctx => {
      expect(ctx.stdout).to.contain('40')
    })

  test
    .stdout()
    .command(['add', '-f', "20", "20.2"])
    .it('should keep precision of float numbers if we add the -f/--float flag', ctx => {
      expect(ctx.stdout).to.contain('40.2')
    })
})
