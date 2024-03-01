import { expect, test } from '@oclif/test'

describe('add:even', () => {
  test
    .stdout()
    .command(['add:even', '10', '10'])
    .it('should return 20', ctx => {
      expect(ctx.stdout).to.contain('20')
    })

  test
    .stdout()
    .command(['add:even', '10', '11'])
    .it('should return an Error if one of the arguments is an odd number', ctx => {
      expect(ctx.stdout).to.contain('Error')
    })

  test
    .stdout()
    .command(['add:even', '11', '11'])
    .it('should return an Error if both of the arguments are an odd number', ctx => {
      expect(ctx.stdout).to.contain('is not even')
    })
})
