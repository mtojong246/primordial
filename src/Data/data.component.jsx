import Air from '../Icons/air.png';
import Earth from '../Icons/earth.png';
import Fire from '../Icons/fire-icon.svg';
import Water from '../Icons/water-icon.svg';
import Dust from '../Icons/dust-icon.svg';
import Land from '../Icons/land.png';
import Lava from '../Icons/lava.png';
import Mist from '../Icons/mist.png';
import Mud from '../Icons/footprints.svg';
import Pressure from '../Icons/speed-test-icon.svg';
import Puddle from '../Icons/puddle.png';
import Smoke from '../Icons/smoke.png';
import Steam from '../Icons/steam-air-icon.svg';
import Brick from '../Icons/brick.svg';
import Continent from '../Icons/continent.svg';
import Earthquake from '../Icons/earthquake.svg';
import Eruption from '../Icons/eruption.svg';
import Geyser from '../Icons/geyser.svg';
import Granite from '../Icons/granite.svg';
import Gunpowder from '../Icons/gunpowder.svg';
import Heat from '../Icons/heat.svg';
import Obsidian from '../Icons/obsidian.svg';
import Pond from '../Icons/pond.svg';
import Stone from '../Icons/stone.svg';
import Volcano from '../Icons/volcano.svg';
import Wind from '../Icons/air.svg';
import Chimney from '../Icons/chimney.svg';
import Clay from '../Icons/clay.svg';
import Energy from '../Icons/energy.png';



export const gameData = [
    {
        id: 1,
        name: 'air',
        image: Air,
        recipes: {
            fire: 'mist'
        },
        filter: ''
    },
    {
        id: 2,
        name: 'earth',
        image: Earth,
        recipes: {},
        filter: ''
    },
    {
        id: 3,
        name: 'fire',
        image: Fire,
        recipes: {
            coal: 'fire',
            alcohol: 'fire'
        },
        filter: 'invert(59%) sepia(51%) saturate(2525%) hue-rotate(341deg) brightness(101%) contrast(101%)'
    },
    {
        id: 4,
        name: 'water',
        image: Water,
        recipes: {
            ice: 'heat',
            snow: 'heat'
        },
        filter: 'invert(96%) sepia(100%) saturate(1216%) hue-rotate(163deg) brightness(100%) contrast(100%)'
    },
    {
        id: 5,
        name: 'dust',
        image: Dust,
        recipes: {
            earth: 'air',
            soil: 'air',
            land: 'air'
        },
        filter: 'invert(75%) sepia(30%) saturate(323%) hue-rotate(350deg) brightness(96%) contrast(91%)'
    },
    {
        id: 6,
        name: 'energy',
        image: Energy,
        recipes: {
            fire: 'fire',
            science: 'fire',
            atmosphere: 'fire',
            heat: 'science'
        },
        filter: 'invert(87%) sepia(15%) saturate(6579%) hue-rotate(357deg) brightness(100%) contrast(107%)'
    },
    {
        id: 7,
        name: 'land',
        image: Land,
        recipes: {
            soil: 'soil',
            big: 'soil',
            small: 'continent',
            earth: 'earth',
            stone: 'earth',
        },
        filter: '',
    },
    {
        id: 8,
        name: 'lava',
        image: Lava,
        recipes: {
            fire: 'earth',
            heat: 'earth',
            liquid: 'earth'
        },
        filter: 'invert(59%) sepia(51%) saturate(2525%) hue-rotate(341deg) brightness(101%) contrast(101%)'
    },
    {
        id: 9,
        name: 'mist',
        image: Mist,
        recipes: {
            water: 'air',
            steam: 'air',
            rain: 'air'
        },
        filter: 'invert(100%) sepia(34%) saturate(0%) hue-rotate(71deg) brightness(105%) contrast(101%)'
    },
    {
        id: 10, 
        name: 'mud',
        image: Mud,
        recipes: {
            earth: 'water',
            soil: 'water'
        },
        filter: 'invert(39%) sepia(59%) saturate(447%) hue-rotate(345deg) brightness(92%) contrast(84%)'
    },
    {
        id: 11,
        name: 'pressure',
        image: Pressure,
        recipes: {
            air: 'air',
            atmosphere: 'atmosphere',
            geyser: 'science',
            ocean: 'ocean'
        },
        filter: ''
    },
    {
        id: 12,
        name: 'puddle',
        image: Puddle,
        recipes: {
            water: 'water',
            pond: 'small'
        },
        filter: 'invert(96%) sepia(100%) saturate(1216%) hue-rotate(163deg) brightness(100%) contrast(100%)'
    },
    {
        id: 13,
        name: 'smoke',
        image: Smoke,
        recipes: {
            gas: 'earth',
            water: 'campfire',
            time: 'campfire',
            storm: 'campfire',
            plant: 'fire',
            grass: 'fire',
            tree: 'fire',
            wood: 'fire',
            air: 'fire'
        },
        filter: ''
    },
    {
        id: 14,
        name: 'steam',
        image: Steam,
        recipes: {
            heat: 'water',
            fire: 'water',
            lava: 'water',
            gas: 'water'
        },
        filter: 'invert(100%) sepia(34%) saturate(0%) hue-rotate(71deg) brightness(105%) contrast(101%)'
    },
    {
        id: 15,
        name: 'brick',
        image: Brick,
        recipes: {
            fire: 'mud',
            mud: 'sun',
            clay: 'fire',
            sun: 'clay',
            stone: 'clay',
        },
        filter: ''
    },
    {
        id: 16,
        name: 'continent',
        image: Continent,
        recipes: {
            big: 'land',
            land: 'land',
            earth: 'land',
            'mountain-range' : 'mountain-range',
        },
        filter: 'invert(54%) sepia(12%) saturate(2184%) hue-rotate(97deg) brightness(91%) contrast(80%)'
    },
    {
        id: 17,
        name: 'earthquake',
        image: Earthquake,
        recipes: {
            earth: 'motion',
            energy: 'earth',
            continent: 'motion',
        },
        filter: 'invert(39%) sepia(59%) saturate(447%) hue-rotate(345deg) brightness(92%) contrast(84%)'
    },
    {
        id: 18,
        name: 'eruption',
        image: Eruption,
        recipes: {
            volcano: 'pressure',
            lava: 'pressure',
            time: 'volcano',
        },
        filter: ''
    },
    {
        id: 19,
        name: 'geyser',
        image: Geyser,
        recipes: {
            earth: 'steam',
            hill: 'steam',
            mountain: 'steam',
            pressure: 'steam',
        },
        filter: ''
    },
    {
        id: 20,
        name: 'granite',
        image: Granite,
        recipes: {
            lava: 'pressure',
            stone: 'pressure',
            rock: 'pressure',
        },
        filter: 'invert(86%) sepia(0%) saturate(0%) hue-rotate(80deg) brightness(90%) contrast(96%)'
    },
    {
        id: 21,
        name: 'gunpowder',
        image: Gunpowder,
        recipes: {
            mineral: 'charcoal',
            energy: 'mineral',
            charcoal: 'charcoal',
            fire: 'dust',
            dust: 'energy',
        },
        filter: 'invert(16%) sepia(8%) saturate(3%) hue-rotate(349deg) brightness(100%) contrast(92%)'
    },
    {
        id: 22,
        name: 'heat',
        image: Heat,
        recipes: {
            idea: 'fire',
            science: 'fire',
            philosophy: 'lava',
            energy: 'air',
        },
        filter: 'invert(86%) sepia(25%) saturate(6188%) hue-rotate(0deg) brightness(106%) contrast(103%)'
    },
    {
        id: 23,
        name: 'obsidian',
        image: Obsidian,
        recipes: {
            water: 'lava',
            cold: 'lava',
            glass: 'lava',
        },
        filter: ''
    },
    {
        id: 24,
        name: 'pond',
        image: Pond,
        recipes: {
            puddle: 'puddle',
            water: 'puddle',
            big: 'puddle',
            lake: 'small',
        },
        filter: 'invert(96%) sepia(100%) saturate(1216%) hue-rotate(163deg) brightness(100%) contrast(100%)'
    },
    {
        id: 25,
        name: 'stone',
        image: Stone,
        recipes: {
            pressure: 'earth',
            solid: 'earth',
            lava: 'air',
        },
        filter: 'invert(16%) sepia(8%) saturate(3%) hue-rotate(349deg) brightness(100%) contrast(92%)'
    },
    {
        id: 26,
        name: 'volcano',
        image: Volcano,
        recipes: {
            mountain: 'lava',
            lava: 'hill',
            container: 'lava',
            fire: 'mountain',
            hill: 'fire',
            pressure: 'mountain',
            'pressure+': 'hill',
        },
        filter: ''
    },
    {
        id: 27,
        name: 'wind',
        image: Wind,
        recipes: {
            air: 'motion',
            motion: 'atmosphere',
            pressure: 'air',
        },
        filter: 'invert(100%) sepia(34%) saturate(0%) hue-rotate(71deg) brightness(105%) contrast(101%)'
    },
    {
        id: 28,
        name: 'chimney',
        image: Chimney,
        recipes: {
            fireplace: 'house',
            house: 'smoke',
            brick: 'smoke',
            smoke: 'fireplace',
            stone: 'smoke',
            'brick+': 'fireplace',
            'fireplace+': 'stone',
        },
        filter: 'invert(20%) sepia(35%) saturate(6342%) hue-rotate(12deg) brightness(98%) contrast(101%)'
    },
    {
        id: 29,
        name: 'clay',
        image: Clay,
        recipes: {
            mud: 'sand',
            stone: 'mud',
            sand: 'mineral',
            mineral: 'stone',
            rock: 'mineral',
            liquid: 'stone',
            'liquid+': 'rock',
        },
        filter: 'invert(18%) sepia(78%) saturate(2532%) hue-rotate(18deg) brightness(94%) contrast(102%)'
    }
]

const range = (min, max) => [...Array(max - min + 1).keys()].map(i => i + min);

export const moreGameData = range(5,29);