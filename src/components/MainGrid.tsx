import { Grid, Box, Flex } from '@mantine/core'
import { Tile } from '../logic/map.ts'

type Props = {
    data: Tile[];
  };

export const MainGrid = ({data}: Props) => {
  return (
    <Grid gutter={0}>
      {data.map((item, index) => {
        return (
            <Grid.Col key={item.id} span={1}>
                <Flex className={`map-cell ${item.terrain}`} align="center" justify="center">
                    <Box className={`map-resource ${item.aboveTerrain}`}>
                        {index}
                    </Box>
                </Flex>
            </Grid.Col>
        )
      })}
    </Grid>
  );
}