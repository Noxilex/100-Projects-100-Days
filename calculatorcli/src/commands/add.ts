import { Args, Command, Flags } from '@oclif/core'

export default class Add extends Command {
  static description = 'describe the command here'

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

  static flags = {
    // flag with no value (-f, --force)
    float: Flags.boolean({ char: 'f' }),
  }

  public async run(): Promise<void> {
    // can get args as an object
    const { args, flags } = await this.parse(Add)
    let first = 0
    let second = 0
    if (isNaN(first) || isNaN(second)) {
      this.error(new Error(`One of the inputs is not a number`))
    }
    if (flags.float) {
      first = parseFloat(args.firstArg)
      second = parseFloat(args.secondArg)
    } else {
      first = parseInt(args.firstArg)
      second = parseInt(args.secondArg)
    }
    this.log(`${first} + ${second} = ${first + second}`)

  }
}
