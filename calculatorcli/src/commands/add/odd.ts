import { Args, Command, Flags } from '@oclif/core'
import Add from '../add'

export default class AddOdd extends Add {
  static description = 'Only adds odd numbers'

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
      this.error(`One of the inputs is not a number`, { exit: 2 })
    }
    if (first % 2 == 1 || second % 2 == 1) {
      this.log(`${first} + ${second} = ${first + second}`)
    } else {
      this.error(`One of the numbers is not odd`, { exit: 2 })
    }
  }
}
