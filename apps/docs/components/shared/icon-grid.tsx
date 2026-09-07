'use client'

import { useMemo, useRef } from 'react'
import { IconGridList } from '@/components/shared/icon-grid-list'
import { IconGridPagination } from '@/components/shared/icon-grid-pagination'
import { IconGridSidebar } from '@/components/shared/icon-grid-sidebar'
import { InputIconSearch } from '@/components/shared/input-icon-search'
import { SelectIconCategory } from '@/components/shared/select-icon-category'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useIconCatalog } from '@/lib/hooks/use-icon-catalog'

export const IconGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const {
    page,
    setPage,
    category,
    setCategory,
    group,
    setGroup,
    query,
    setQuery,
    pageItems,
    totalPages,
    pagesToShow,
    catalog,
  } = useIconCatalog()

  const UIIconsCount = useMemo(() => catalog.filter(icon => icon.group === 'ui').length, [catalog])
  const flagsIconsCount = useMemo(
    () => catalog.filter(icon => icon.group === 'flags').length,
    [catalog]
  )
  const handlePageChange = (nextPage: number) => {
    containerRef.current?.scrollIntoView({ behavior: 'instant', block: 'start' })
    setPage(nextPage)
  }

  return (
    <div className='grid gap-4 md:pt-4' ref={containerRef}>
      <InputIconSearch value={query} onChange={setQuery} />

      <Tabs className='gap-6' value={group} onValueChange={setGroup}>
        <TabsList className='w-full max-w-md lg:max-w-lg mx-auto'>
          <TabsTrigger value='ui'>
            UI <span className='text-muted-foreground text-xs ml-1.5'>{UIIconsCount}</span>
          </TabsTrigger>
          <TabsTrigger value='flags'>
            Flags <span className='text-muted-foreground text-xs ml-1.5'>{flagsIconsCount}</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value='ui'>
          <div className='grid gap-8 max-w-6xl mx-auto lg:grid-cols-6 xl:grid-cols-8'>
            <SelectIconCategory className='lg:hidden' value={category} onChange={setCategory} />

            <IconGridSidebar containerRef={containerRef} UIIconsCount={UIIconsCount} />

            <IconGridList
              className='lg:col-span-4 xl:col-span-6'
              icons={pageItems}
              emptyTitle='No Icons Found'
            />
          </div>
        </TabsContent>

        <TabsContent value='flags'>
          <div className='grid gap-8 max-w-6xl mx-auto'>
            <IconGridList icons={pageItems} emptyTitle='No Flags Found' />
          </div>
        </TabsContent>
      </Tabs>

      <div className='grid gap-8 mt-4'>
        <IconGridPagination
          page={page}
          totalPages={totalPages}
          pagesToShow={pagesToShow}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}
