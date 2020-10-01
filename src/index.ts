import { Command, flags } from '@oclif/command';

import { createScaffold } from './react-feature';

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
      createScaffold(this, featureName, flags);
    }
  }
}

export = ReactFeatureCli;
