import { Grid, Box, Flex } from "@mantine/core";
import { GridItem } from "../components/GridItem";
import { Tile } from "../logic/map.ts";

interface Props {
  data: Tile[];
}

export const MainGrid = ({ data }: Props) => {
  return (
    <Grid gutter={0}>
      {data.map((item) => {
        return (
          <Grid.Col key={item.id} span={1}>
            <Flex
              className={`map-cell ${item.terrain}`}
              align="center"
              justify="center"
            >
              <GridItem
                className={`map-resource ${
                  item.playerControl > 0 ? "none" : item.aboveTerrain
                }`}
                item={item}
              />
            </Flex>
          </Grid.Col>
        );
      })}
    </Grid>
  );
};
