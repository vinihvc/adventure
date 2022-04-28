import { FactoryModel } from '@/models/factory'

import potatoImg from '@/assets/img/potato.png'
import landImg from '@/assets/img/land.png'
import baconImg from '@/assets/img/bacon.png'
import assassinImg from '@/assets/img/assassin.png'
import medicineImg from '@/assets/img/medicine.png'
import rocketImg from '@/assets/img/rocket.png'
import planetImg from '@/assets/img/planet.png'
import galaxyImg from '@/assets/img/galaxy.png'
import magicImg from '@/assets/img/magic.png'
import timeTravelImg from '@/assets/img/timeTravel.png'

const potato: FactoryModel = {
  type: 'potato',
  name: 'Potato',
  image: potatoImg,
  duration: 2,
  value: 6,
  activePrice: 0,
}

const land: FactoryModel = {
  type: 'land',
  name: 'Land',
  image: landImg,
  duration: 4,
  value: 12,
  activePrice: 0,
}

const ore: FactoryModel = {
  type: 'bacon',
  name: 'Bacon',
  image: baconImg,
  duration: 8,
  value: 24,
  activePrice: 0,
}

const weapon: FactoryModel = {
  type: 'assassin',
  name: 'Assassin',
  image: assassinImg,
  duration: 16,
  value: 48,
  activePrice: 0,
}

const medicine: FactoryModel = {
  type: 'medicine',
  name: 'Medicine',
  image: medicineImg,
  duration: 32,
  value: 5000,
  activePrice: 0,
}

const rocket: FactoryModel = {
  type: 'rocket',
  name: 'Rocket',
  image: rocketImg,
  duration: 32,
  value: 90000,
  activePrice: 0,
}

const planet: FactoryModel = {
  type: 'planet',
  name: 'Planet',
  image: planetImg,
  duration: 32,
  value: 4000000,
  activePrice: 0,
}

const galaxy: FactoryModel = {
  type: 'galaxy',
  name: 'Galaxy',
  image: galaxyImg,
  duration: 32,
  value: 909090990,
  activePrice: 0,
}

const magic: FactoryModel = {
  type: 'sorcery',
  name: 'Sorcery',
  image: magicImg,
  duration: 32,
  value: 960000000000,
  activePrice: 0,
}

const timeTravel: FactoryModel = {
  type: 'timeTravel',
  name: 'Time Travel',
  image: timeTravelImg,
  duration: 32,
  value: 2 ^ 57,
  activePrice: 0,
}

export const FACTORIES = {
  potato,
  land,
  ore,
  weapon,
  medicine,
  rocket,
  planet,
  galaxy,
  magic,
  timeTravel,
}
