import { Box } from '@mantine/core'
import { PlayerBase } from '../components/PlayerBase'
import { Tile } from '../logic/map.ts'

interface Props {
    className: string
    item: Tile
  }

export const GridItem = ({className, item}: Props) => {

  function canConquest(){
    
  }

  return (
    <Box className={className} onClick={canConquest}>
        {item.playerControl > 0 && <PlayerBase id={item.playerControl} baseType="castle" />}
    </Box>
  );
}