import { Toolbar, Typography, Box, Grid } from '@material-ui/core'

import Videos from '../../data/VideoList'

const VideoGrid: React.FC = () => {
  return (
    <Box p={8}>
      <Toolbar />
      <Typography variant='h5' color='textPrimary' style={{ fontWeight: 600, marginBottom: 10 }}>
        Recomendados
      </Typography>

      <Grid container spacing={4}>
        {Videos.map((item) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
            <Box>
              <img
                style={{ width: '100%' }}
                alt={item.title}
                src={item.thumb}
              />
              <Box>
                <Typography
                  style={{ fontWeight: 600 }}
                  gutterBottom
                  variant='body1'
                  color='textPrimary'
                >
                  {item.title}
                </Typography>
                <Typography
                  display='block'
                  variant='body2'
                  color='textSecondary'
                >
                  {item.channel}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  {`${item.views} • ${item.date}`}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default VideoGrid