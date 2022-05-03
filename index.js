// import colors from library
import chalk from 'chalk';
import randomColor from 'randomcolor';

const color = randomColor();

const hashBlock = `##############################
##############################
##############################
#####                   ######
#####      ${color}             ######
#####                   ######
##############################
##############################
##############################`;

if (process.argv.length < 3) {
  console.log(chalk.hex(color)(hashBlock));
} else if (process.argv[2] == 'ask') {
  console.log('Specify color');
} else {
  console.log(
    chalk.hex(
      randomColor({ luminosity: process.argv[3], hue: process.argv[2] }),
    )(hashBlock),
  );
}
