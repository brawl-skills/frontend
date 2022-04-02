import random from './random'

// List for all brawlers on 02/04/22
const brawlers = [
  'SHELLY',
  'COLT',
  'BULL',
  'BROCK',
  'RICO',
  'SPIKE',
  'BARLEY',
  'JESSIE',
  'NITA',
  'DYNAMIKE',
  'EL PRIMO',
  'MORTIS',
  'CROW',
  'POCO',
  'BO',
  'PIPER',
  'PAM',
  'TARA',
  'DARRYL',
  'PENNY',
  'FRANK',
  'GENE',
  'TICK',
  'LEON',
  'ROSA',
  'CARL',
  'BIBI',
  '8-BIT',
  'SANDY',
  'BEA',
  'EMZ',
  'MR. P',
  'MAX',
  'JACKY',
  'GALE',
  'NANI',
  'SPROUT',
  'SURGE',
  'COLETTE',
  'AMBER',
  'LOU',
  'BYRON',
  'EDGAR',
  'COLONEL RUFFS',
  'STU',
  'BELLE',
  'SQUEAK',
  'GROM',
  'BUZZ',
  'GRIFF',
  'ASH',
  'MEG',
  'LOLA',
  'FANG',
  'EVE',
]

/**
 * Function for getting random brawler name
 * @returns random name
 */
export default function randBrawlerName(): string {
  return brawlers[random(0, brawlers.length - 1)]
}
