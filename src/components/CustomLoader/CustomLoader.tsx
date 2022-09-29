import { FC } from 'react'
import { Loader, useMantineTheme } from '@mantine/core'

const CustomLoader: FC = () => {
  const theme = useMantineTheme()

  return (
    <Loader
      variant="dots"
      size="xl"
      color={
        theme.colorScheme === 'dark'
          ? theme.colors.yellow[4]
          : theme.colors.dark[9]
      }
      sx={{ margin: '1rem auto', width: '100%', marginTop: '50%' }}
    />
  )
}

export default CustomLoader
