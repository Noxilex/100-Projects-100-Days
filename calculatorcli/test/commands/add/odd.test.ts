import { expect, test } from '@oclif/test'

describe('add:odd', () => {
  test
    .stdout()
    .command(['add:odd', '11', '11'])
    .it('should return 22', ctx => {
      expect(ctx.stdout).to.contain('22')
    })

  test
    .stdout()
    .command(['add:odd', '10', '11'])
    .it('should return an Error if one of the arguments is an even number', ctx => {
      expect(ctx.stdout).to.contain('Error')
    })

  test
    .stdout()
    .command(['add:odd', '10', '10'])
    .exit(2) // Expect the command to exit with a non-zero status code (failure)
    .it('should fail when an invalid flag is provided', (ctx) => {
      // You can add additional assertions here if needed
      expect(ctx.stdout).to.contain("not odd");
    })
})
