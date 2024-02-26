import { Args, Command, Flags } from '@oclif/core'
import Add from '../add'

export default class AddEven extends Add {
  static description = 'Only adds even numbers'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]
  static args = {
    firstArg: Args.string({
      default: "0"
    }),
    secondArg: Args.string({
      default: "0"
    }),
  }

  public async run(): Promise<void> {
    // can get args as an object
    const { args } = await this.parse(Add)
    let first = parseInt(args.firstArg)
    let second = parseInt(args.secondArg)
    if (isNaN(first) || isNaN(second)) {
      this.error(new Error(`One of the inputs is not a number`))
    }
    if (first % 2 == 0 || second % 2 == 0) {
      this.log(`${first} + ${second} = ${first + second}`)
    } else {
      this.error(new Error(`One of the numbers is not even`))
    }
  }
}
