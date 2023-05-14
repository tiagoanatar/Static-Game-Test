type Terrain = 'grass' | 'desert'
type Resource = 'r-mountain-crystal' | 'r-mountain-iron' 
type NonResource = '' | 'forest'

export interface Tile {
  id: string;
  terrain: Terrain;
  resource: boolean;
  aboveTerrain: Resource | NonResource;
  y: number
  x: number
  playerControl: number
}

// Get random boolean
const getRandomBoolean = (chance: number) => Math.random() < chance;

// Get random number
const getRandomNumber = (num: number) => Math.round(Math.random()) + num;

// Get random terrain
const getRandomTerrain = ():Terrain => {
  const terrainList: Terrain[] = ['grass', 'desert']
  return terrainList[getRandomNumber(terrainList.length-2)]
}

// Get random resource
const getRandomResource = ():Resource => {
  const resourceList: Resource[] = ['r-mountain-crystal', 'r-mountain-iron' ]
  return resourceList[getRandomNumber(resourceList.length-2)]
}

// Get random non resource
const getRandomNonResource = ():NonResource => {
  const resourceList: NonResource[] = ['', 'forest']
  if (getRandomBoolean(0.1)) {
    return resourceList[getRandomNumber(resourceList.length-2)] 
  }
  return resourceList[0]
}

// Multiples of 12 size
export const feedTileSet = (size: number) => {
    const firstGameSet: Tile[] = []
    const rowBase = size/10

    for(let y = 0; y < rowBase; y++){
      for(let x = 0; x < rowBase; x++){

        // Random set
        const resource = getRandomBoolean(0.1)
        const terrain = getRandomTerrain()
        let aboveTerrain

        if (resource){
          aboveTerrain = getRandomResource() 
        } else {
          aboveTerrain = getRandomNonResource()
        }

        firstGameSet.push({
          id: `${terrain}-${y}-${x}`,
          terrain: terrain,
          resource: resource,
          aboveTerrain: aboveTerrain,
          y: y,
          x: x,
          playerControl: 0
        })
      }
    }
    return firstGameSet
}