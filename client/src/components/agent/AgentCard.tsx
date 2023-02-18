import { EmailOutlined, LocationCity, Phone, Place } from '@mui/icons-material';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useGetIdentity } from '@pankod/refine-core';
import { Box, Stack, Typography } from '@pankod/refine-mui';
import { Link } from '@pankod/refine-react-router-v6';

import { AgentCardProp, InfoBarProps } from 'interfaces/agent';

const InfoBar = ({ icon, name }: InfoBarProps) => (
  <Stack flex={1} minWidth={{ xs: '100%', sm: 300 }} gap={1.5} direction='row' color={'yellow'}>
    {icon}
    <Typography fontSize={14} color={'ivory'}>
      {name}
    </Typography>
  </Stack>
);

const AgentCard = ({ id, name, email, avatar, noOfProperties }: AgentCardProp) => {

  const { data: currentUser } = useGetIdentity();

  const generateLink = () => {
    if(currentUser.email === email) {
      return '/my-profile'
    } else {
      return `agent/show/${id}`
    }
  }

  return (
    <Box
      component={Link}
      to={generateLink()}
      width='100%'
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row'},
        gap: '20px',
        padding: '20px',
        '&:hover': {
          boxShadow: '0 10px 10px 2px rgb(91,7,104, 0.4)'
        },
      }}
    >
      <img 
        src={avatar}
        alt='user'
        width={90}
        height={90}
        style={{ borderRadius: 8, objectFit: 'cover'}}
      />
      <Stack direction='column' justifyContent='space-between' flex={1} gap={{ sx: 4, sm: 2 }}>
        <Stack direction='row' gap={2} flexWrap='wrap' alignItems='center'>
          <Typography fontSize={22} fontWeight={600} color='ivory'>
            {name}
          </Typography>
          <Typography fontSize={14} fontWeight={300} color='yellow'>
            Private Real-Estate Agent
          </Typography>
          <VerifiedIcon sx={{ color: '#1DA1F2' }}/>
        </Stack>
        <Stack direction='row' flexWrap='wrap' justifyContent='space-between' alignItems='center' gap={2}>
          <InfoBar 
            icon={<EmailOutlined />}
            name={email}
          />
          <InfoBar 
            icon={<Place />}
            name='Los Angeles, California'
          />
          <InfoBar 
            icon={<Phone />}
            name='(317)748-7194'
          />
          <InfoBar 
            icon={<LocationCity />}
            name={`${noOfProperties} Properties`}
          />
        </Stack>
      </Stack>
    </Box>
  )
}

export default AgentCard