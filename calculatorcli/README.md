oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g calculatorcli
$ calculatorcli COMMAND
running command...
$ calculatorcli (--version)
calculatorcli/0.0.0 win32-x64 node-v20.11.1
$ calculatorcli --help [COMMAND]
USAGE
  $ calculatorcli COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g oclif-hello-world
$ oex COMMAND
running command...
$ oex (--version)
oclif-hello-world/0.0.0 darwin-x64 node-v16.13.1
$ oex --help [COMMAND]
USAGE
  $ oex COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`calculatorcli add [FIRSTARG] [SECONDARG]`](#calculatorcli-add-firstarg-secondarg)
* [`calculatorcli add even [FIRSTARG] [SECONDARG]`](#calculatorcli-add-even-firstarg-secondarg)
* [`calculatorcli add odd [FIRSTARG] [SECONDARG]`](#calculatorcli-add-odd-firstarg-secondarg)
* [`calculatorcli help [COMMANDS]`](#calculatorcli-help-commands)
* [`calculatorcli plugins`](#calculatorcli-plugins)
* [`calculatorcli plugins:install PLUGIN...`](#calculatorcli-pluginsinstall-plugin)
* [`calculatorcli plugins:inspect PLUGIN...`](#calculatorcli-pluginsinspect-plugin)
* [`calculatorcli plugins:install PLUGIN...`](#calculatorcli-pluginsinstall-plugin-1)
* [`calculatorcli plugins:link PLUGIN`](#calculatorcli-pluginslink-plugin)
* [`calculatorcli plugins:uninstall PLUGIN...`](#calculatorcli-pluginsuninstall-plugin)
* [`calculatorcli plugins reset`](#calculatorcli-plugins-reset)
* [`calculatorcli plugins:uninstall PLUGIN...`](#calculatorcli-pluginsuninstall-plugin-1)
* [`calculatorcli plugins:uninstall PLUGIN...`](#calculatorcli-pluginsuninstall-plugin-2)
* [`calculatorcli plugins update`](#calculatorcli-plugins-update)

## `calculatorcli add [FIRSTARG] [SECONDARG]`

describe the command here

```
USAGE
  $ calculatorcli add [FIRSTARG] [SECONDARG] [-f]

FLAGS
  -f, --float

DESCRIPTION
  describe the command here

EXAMPLES
  $ calculatorcli add
```

_See code: [src/commands/add.ts](https://github.com/Noxilex/100_Projects_100_Days/blob/v0.0.0/src/commands/add.ts)_

## `calculatorcli add even [FIRSTARG] [SECONDARG]`

describe the command here

```
USAGE
  $ calculatorcli add even [FIRSTARG] [SECONDARG] [-f]

FLAGS
  -f, --float

DESCRIPTION
  describe the command here

EXAMPLES
  $ calculatorcli add even
```

_See code: [src/commands/add/even.ts](https://github.com/Noxilex/100_Projects_100_Days/blob/v0.0.0/src/commands/add/even.ts)_

## `calculatorcli add odd [FIRSTARG] [SECONDARG]`

describe the command here

```
USAGE
  $ calculatorcli add odd [FIRSTARG] [SECONDARG] [-f]

FLAGS
  -f, --float

DESCRIPTION
  describe the command here

EXAMPLES
  $ calculatorcli add odd
```

_See code: [src/commands/add/odd.ts](https://github.com/Noxilex/100_Projects_100_Days/blob/v0.0.0/src/commands/add/odd.ts)_

## `calculatorcli help [COMMANDS]`

Display help for calculatorcli.

```
USAGE
  $ calculatorcli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for calculatorcli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.14/src/commands/help.ts)_

## `calculatorcli plugins`

List installed plugins.

```
USAGE
  $ calculatorcli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ calculatorcli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/index.ts)_

## `calculatorcli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ calculatorcli plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ calculatorcli plugins add

EXAMPLES
  $ calculatorcli plugins add myplugin 

  $ calculatorcli plugins add https://github.com/someuser/someplugin

  $ calculatorcli plugins add someuser/someplugin
```

## `calculatorcli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ calculatorcli plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ calculatorcli plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/inspect.ts)_

## `calculatorcli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ calculatorcli plugins install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ calculatorcli plugins add

EXAMPLES
  $ calculatorcli plugins install myplugin 

  $ calculatorcli plugins install https://github.com/someuser/someplugin

  $ calculatorcli plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/install.ts)_

## `calculatorcli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ calculatorcli plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ calculatorcli plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/link.ts)_

## `calculatorcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ calculatorcli plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ calculatorcli plugins unlink
  $ calculatorcli plugins remove

EXAMPLES
  $ calculatorcli plugins remove myplugin
```

## `calculatorcli plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ calculatorcli plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/reset.ts)_

## `calculatorcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ calculatorcli plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ calculatorcli plugins unlink
  $ calculatorcli plugins remove

EXAMPLES
  $ calculatorcli plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/uninstall.ts)_

## `calculatorcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ calculatorcli plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ calculatorcli plugins unlink
  $ calculatorcli plugins remove

EXAMPLES
  $ calculatorcli plugins unlink myplugin
```

## `calculatorcli plugins update`

Update installed plugins.

```
USAGE
  $ calculatorcli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.2/src/commands/plugins/update.ts)_
<!-- commandsstop -->
* [`oex hello PERSON`](#oex-hello-person)
* [`oex hello world`](#oex-hello-world)
* [`oex help [COMMAND]`](#oex-help-command)
* [`oex plugins`](#oex-plugins)
* [`oex plugins:inspect PLUGIN...`](#oex-pluginsinspect-plugin)
* [`oex plugins:install PLUGIN...`](#oex-pluginsinstall-plugin)
* [`oex plugins:link PLUGIN`](#oex-pluginslink-plugin)
* [`oex plugins:uninstall PLUGIN...`](#oex-pluginsuninstall-plugin)
* [`oex plugins update`](#oex-plugins-update)

## `oex hello PERSON`

Say hello

```
USAGE
  $ oex hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/oclif/hello-world/blob/v0.0.0/dist/commands/hello/index.ts)_

## `oex hello world`

Say hello world

```
USAGE
  $ oex hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `oex help [COMMAND]`

Display help for oex.

```
USAGE
  $ oex help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for oex.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `oex plugins`

List installed plugins.

```
USAGE
  $ oex plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ oex plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `oex plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ oex plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ oex plugins:inspect myplugin
```

## `oex plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ oex plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ oex plugins add

EXAMPLES
  $ oex plugins:install myplugin 

  $ oex plugins:install https://github.com/someuser/someplugin

  $ oex plugins:install someuser/someplugin
```

## `oex plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ oex plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ oex plugins:link myplugin
```

## `oex plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oex plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oex plugins unlink
  $ oex plugins remove
```

## `oex plugins update`

Update installed plugins.

```
USAGE
  $ oex plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
