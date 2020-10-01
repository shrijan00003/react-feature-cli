import { Command, flags } from '@oclif/command';

class ReactFeatureCli extends Command {
  static description = 'Command for creating scaffolding for the react';

  static flags = {
    help: flags.help({ char: 'h' }),
    isTypescript: flags.boolean({ char: 't' }),
  };

  static args = [{ name: 'feature' }];

  async run() {
    const { args, flags } = this.parse(ReactFeatureCli);

    const featureName = args.feature || 'Default';

    if (featureName) {
      this.log(`${featureName} scafolding is going to be created`);
    }

    if (flags.isTypescript) {
      this.log('Typescript is selected');
    }
  }
}

export = ReactFeatureCli;
