'use client'

import { useEffect, useState } from 'react'
import { IconSection } from '@/components/sections/icon'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import { useIconCatalog } from '@/lib/hooks/use-icon-catalog'

export const DrawerIcon = () => {
  const { iconParam, setIconParam, group } = useIconCatalog()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (iconParam) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [iconParam])

  const handleClose = () => {
    setIconParam(null)
  }

  return (
    <Drawer
      open={open}
      showSwipeHandle
      onOpenChange={value => {
        if (value) {
          setOpen(value)
        } else {
          handleClose()
        }
      }}>
      <DrawerContent className='wrapper max-w-4xl' key={iconParam}>
        <DrawerHeader>
          <DrawerTitle className='sr-only'>Icon overview</DrawerTitle>
          <DrawerDescription className='sr-only'>Details about the icon</DrawerDescription>
        </DrawerHeader>
        <div className='overflow-y-auto scroll-fade-y px-4 pt-2 pb-12 md:pb-20 md:px-8 md:pt-6'>
          {iconParam ? (
            <IconSection
              group={group}
              iconName={iconParam}
              showFullData
              // biome-ignore lint/performance/noJsxPropsBind: unnecessary
              onChange={() => {
                setOpen(false)
              }}
            />
          ) : null}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
