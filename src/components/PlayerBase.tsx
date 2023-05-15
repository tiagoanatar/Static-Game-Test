import { useState } from 'react'
import { Box, Popover, Progress } from "@mantine/core";

type BaseType = "castle" | "mine" | "farm";

interface Props {
  id: number
  baseType: BaseType
}

export const PlayerBase = ({ id, baseType }: Props) => {
  const [life, setLife] = useState(100)
  return (
    <Popover width="target" position="bottom" withArrow shadow="md">
    <Popover.Target>
      <Box className={`player-base-type ${baseType}-${id}`}></Box>
    </Popover.Target>
    <Popover.Dropdown>
      <Box p="15">
        Life:
        <Progress value={life} />
      </Box>
    </Popover.Dropdown>
  </Popover>
  );
};
