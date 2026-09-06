'use client'

import {
  IconAccessibility,
  IconAirplane,
  IconAlpha,
  IconAnnouncement,
  IconArrowUpRight,
  IconBacteria,
  IconBall,
  IconBrain,
  IconBriefcase,
  IconBuildings,
  IconChartLineUp,
  IconChatDots,
  IconClock,
  IconCloud,
  IconCode,
  IconCoins,
  IconCursor,
  IconDevicePc,
  IconEdit,
  IconFaceBlink,
  IconFile,
  IconGamingPad,
  IconGitFork,
  IconHamburger,
  IconHeartPulse,
  IconHouse,
  IconLayout,
  IconLeaf,
  IconLightning,
  IconMail,
  IconMovie,
  IconNavigation,
  IconPaintBoard,
  IconPawPrint,
  IconPencilRuler,
  IconShare,
  IconShield,
  IconShipFront,
  IconShoppingBag,
  IconText,
  IconUser,
} from '@andrsrxn/icons'
import type { Icon } from '@andrsrxn/icons/types'
import type { IconCatalogEntry } from '@andrsrxn/raw-icons/types'
import { type RefObject, useMemo } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import type { IconCategory } from '@/lib/constants/icons'
import { useIconCatalog } from '@/lib/hooks/use-icon-catalog'
import { capitalize, cn } from '@/lib/utils'
import { isUIIcon } from '@/lib/utils/icons'

const CATEGORIES_WITH_ICONS = [
  {
    title: 'accessibility',
    icon: IconAccessibility,
  },
  { title: 'ai', icon: IconBrain },
  { title: 'animals', icon: IconPawPrint },
  { title: 'arrows', icon: IconArrowUpRight },
  { title: 'buildings', icon: IconBuildings },
  { title: 'business', icon: IconBriefcase },
  { title: 'charts', icon: IconChartLineUp },
  { title: 'code', icon: IconCode },
  { title: 'communication', icon: IconAnnouncement },
  { title: 'cursor', icon: IconCursor },
  { title: 'design', icon: IconPaintBoard },
  { title: 'development', icon: IconGitFork },
  { title: 'devices', icon: IconDevicePc },
  { title: 'documents', icon: IconFile },
  { title: 'editor', icon: IconEdit },
  { title: 'energy', icon: IconLightning },
  { title: 'emoji', icon: IconFaceBlink },
  { title: 'finance', icon: IconCoins },
  { title: 'food', icon: IconHamburger },
  { title: 'gaming', icon: IconGamingPad },
  { title: 'home', icon: IconHouse },
  { title: 'layout', icon: IconLayout },
  { title: 'mail', icon: IconMail },
  { title: 'media', icon: IconMovie },
  { title: 'medical', icon: IconHeartPulse },
  { title: 'messages', icon: IconChatDots },
  { title: 'nature', icon: IconLeaf },
  { title: 'navigation', icon: IconNavigation },
  { title: 'people', icon: IconUser },
  { title: 'science', icon: IconBacteria },
  { title: 'security', icon: IconShield },
  { title: 'shopping', icon: IconShoppingBag },
  { title: 'social', icon: IconShare },
  { title: 'sports', icon: IconBall },
  { title: 'symbols', icon: IconAlpha },
  { title: 'time', icon: IconClock },
  { title: 'tools', icon: IconPencilRuler },
  { title: 'transport', icon: IconShipFront },
  { title: 'travel', icon: IconAirplane },
  { title: 'typography', icon: IconText },
  { title: 'weather', icon: IconCloud },
] satisfies { title: IconCategory; icon: Icon }[]

export const IconGridSidebar = ({
  containerRef,
  UIIconsCount,
}: {
  containerRef: RefObject<HTMLDivElement | null>
  // biome-ignore lint/style/useNamingConvention: starts with UI
  UIIconsCount: number
}) => {
  const {
    category,
    setCategory,

    catalog,
  } = useIconCatalog()

  const categoriesWithCount = useMemo(
    () =>
      CATEGORIES_WITH_ICONS.map(cat => ({
        cat: cat.title,
        icon: cat.icon,
        count: catalog.filter(
          (icon: IconCatalogEntry) => isUIIcon(icon) && icon.categories.includes(cat.title)
        ).length,
      })),
    [catalog]
  )
  return (
    <aside className='hidden lg:block lg:col-span-2 relative'>
      <nav className='sticky top-6 h-[calc(100dvh-3rem)] p-2 bg-card border rounded-lg max-h-max overflow-y-scroll scroll-fade-y overscroll-contain'>
        <div className='px-2 my-2 '>
          <h2 className='text-lg font-semibold'>Categories</h2>
        </div>
        <ul className='grid gap-1'>
          <li>
            <Button
              variant={category === null ? 'default' : 'ghost'}
              className={cn('text-left justify-between w-full')}
              // biome-ignore lint/performance/noJsxPropsBind: unnecessary
              onClick={() => setCategory(null)}>
              All categories{' '}
              <Badge variant='secondary' className='text-muted-foreground'>
                {UIIconsCount}
              </Badge>
            </Button>
          </li>
          <Separator className='my-2' />
          {categoriesWithCount.map(cat => (
            <li key={cat.cat}>
              <Button
                variant={cat.cat === category ? 'default' : 'ghost'}
                className={cn('text-left justify-between w-full')}
                // biome-ignore lint/performance/noJsxPropsBind: unnecessary
                onClick={() => {
                  setCategory(cat.cat)
                  containerRef.current?.scrollIntoView({
                    behavior: 'instant',
                    block: 'start',
                  })
                }}>
                <span className='flex items-center gap-2'>
                  <cat.icon />
                  {capitalize(cat.cat)}{' '}
                </span>
                <Badge variant='secondary' className='text-muted-foreground'>
                  {cat.count}
                </Badge>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
