import { useList } from "@pankod/refine-core";
import { Box, Typography } from '@pankod/refine-mui';

import { AgentCard } from "components";

const Agents = () => {

  const { data, isLoading, isError } = useList({
    resource: 'users',
  });

  const allAgents = data?.data ?? [];

  if(isLoading) return <Typography>Loading All Properties...</Typography>
  if(isError) return <Typography>Error Loading Properties...</Typography>
  
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700}>
        Agents List
      </Typography>
    </Box>
  )
}

export default Agents