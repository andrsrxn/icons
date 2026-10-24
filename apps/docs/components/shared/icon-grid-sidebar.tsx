'use client'

import {
  IconAccessibility,
  IconAirplane,
  IconAlpha,
  IconArrowUpRight,
  IconBacteria,
  IconBall,
  IconBrain,
  IconBriefcase,
  IconBuildings,
  IconChartLineUp,
  IconClock,
  IconCloud,
  IconCoins,
  IconCursor,
  IconDevicePc,
  IconEdit,
  IconFaceBlink,
  IconFile,
  IconGameController,
  IconGitFork,
  IconHamburger,
  IconHeartPulse,
  IconHouse,
  IconLayout,
  IconLeaf,
  IconLightning,
  IconMail,
  IconMaths,
  IconMegaphone,
  IconMessageDots,
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
import { type RefObject, useEffect, useMemo, useRef } from 'react'
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
  { title: 'communication', icon: IconMegaphone },
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
  { title: 'gaming', icon: IconGameController },
  { title: 'home', icon: IconHouse },
  { title: 'layout', icon: IconLayout },
  { title: 'mail', icon: IconMail },
  { title: 'math', icon: IconMaths },
  { title: 'media', icon: IconMovie },
  { title: 'medical', icon: IconHeartPulse },
  { title: 'messages', icon: IconMessageDots },
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

const SCROLL_OFFSET = 100

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
          (icon: IconCatalogEntry) => isUIIcon(icon) && icon.c.includes(cat.title)
        ).length,
      })),
    [catalog]
  )

  const navRef = useRef<HTMLElement | null>(null)
  const activeCategoryRef = useRef<HTMLButtonElement | null>(null)

  const prevCategoryRef = useRef(category)

  useEffect(() => {
    const prevCategory = prevCategoryRef.current
    prevCategoryRef.current = category

    // When a category is selected, scroll sidebar to that button
    if (category && activeCategoryRef.current && navRef.current) {
      const nav = navRef.current
      const button = activeCategoryRef.current

      const buttonTop = button.offsetTop
      const buttonBottom = buttonTop + button.offsetHeight
      const navScrollTop = nav.scrollTop
      const navHeight = nav.clientHeight

      if (buttonTop < navScrollTop) {
        nav.scrollTo({ top: buttonTop - SCROLL_OFFSET, behavior: 'smooth' })
      } else if (buttonBottom > navScrollTop + navHeight) {
        nav.scrollTo({
          top: buttonBottom - navHeight + SCROLL_OFFSET,
          behavior: 'smooth',
        })
      }
    }
    // When transitioning from an active category to null
    else if (prevCategory !== null && category === null) {
      // Scroll sidebar nav back to top
      navRef.current?.scrollTo({ top: 0, behavior: 'smooth' })

      // Scroll main grid into view
      containerRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, [category, containerRef])

  useEffect(() => {
    if (category && activeCategoryRef.current) {
      containerRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, [category, containerRef.current])

  return (
    <aside className='hidden lg:block lg:col-span-2 relative'>
      <nav
        ref={navRef}
        className='sticky top-6 h-[calc(100dvh-3rem)] p-2 bg-card border rounded-lg max-h-max overflow-y-scroll scroll-fade-y overscroll-contain'>
        <div className='px-2 my-2 '>
          <h2 className='text-lg font-semibold'>Categories</h2>
        </div>
        <ul className='grid gap-1'>
          <li className='sr-only focus-within:not-sr-only mb-1!'>
            <Button
              variant='outline'
              nativeButton={false}
              className='w-full'
              render={<a href='#main-content'>Skip navigation</a>}
            />
          </li>
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
          {categoriesWithCount.map(cat => {
            const isActive = cat.cat === category

            return (
              <li key={cat.cat}>
                <Button
                  ref={isActive ? activeCategoryRef : null}
                  variant={isActive ? 'default' : 'ghost'}
                  className={cn('text-left justify-between w-full')}
                  // biome-ignore lint/performance/noJsxPropsBind: unnecessary
                  onClick={() => {
                    setCategory(cat.cat)
                    containerRef.current?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'nearest',
                    })
                  }}>
                  <span className='flex items-center gap-2'>
                    <cat.icon />
                    {cat.cat === 'ai' ? 'AI' : capitalize(cat.cat)}{' '}
                  </span>
                  <Badge variant='secondary' className='text-muted-foreground'>
                    {cat.count}
                  </Badge>
                </Button>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
