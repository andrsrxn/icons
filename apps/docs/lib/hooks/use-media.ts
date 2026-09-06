import { useMedia as useMediaQuery } from 'react-use'

export const useMedia = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const isTablet = useMediaQuery('(min-width: 768px)')
  const isMobile = useMediaQuery('(min-width: 640px)')

  return { isDesktop, isTablet, isMobile }
}
