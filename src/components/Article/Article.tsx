import React, { FC } from 'react'
import {
  Card,
  Badge,
  useMantineTheme,
  Text,
  Group,
  Anchor,
  Box,
} from '@mantine/core'
import { motion } from 'framer-motion'
import dayjs from 'dayjs'
import { ExternalLink } from 'tabler-icons-react'
import { IArticleProps } from '../../interfaces/Article.interface'
import useStyles from './Article.styles'

const Article: FC<IArticleProps> = ({ title, link, categories, pubDate }) => {
  const { classes } = useStyles()
  const theme = useMantineTheme()

  const badges = categories.slice(4).map((category: {}, i: number) => (
    <Badge
      key={i}
      color={theme.colorScheme === 'dark' ? 'yellow' : 'dark'}
      size="xs"
      variant="outline"
    >
      {category}
    </Badge>
  ))

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
    >
      <Card className={classes.card} withBorder radius="sm" shadow="sm">
        <Card.Section pl="md" pr="sm" pt="sm">
          <Group position="apart">
            <Text size="xs" color="dimmed">
              {dayjs(pubDate).format('MMMM D, YYYY')}
            </Text>
            <Anchor href={link} target="_blank">
              <ExternalLink size={24} strokeWidth={2} color="#808080" />
            </Anchor>
          </Group>
        </Card.Section>
        <Card.Section px="md" py="sm">
          <Text size="lg" weight={700}>
            {title}
          </Text>
        </Card.Section>
        <Card.Section py="md" pb="sm">
          <Box className={classes.badges}>{badges}</Box>
        </Card.Section>
      </Card>
    </motion.div>
  )
}

export default Article
