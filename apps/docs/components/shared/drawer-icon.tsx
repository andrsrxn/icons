'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useMedia } from 'react-use'
import { IconSection } from '@/components/sections/icon'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'

export const DrawerIcon = ({ iconName }: { iconName: string }) => {
  const [open, setOpen] = useState(false)
  const isLaptop = useMedia('(min-width: 1024px)')
  const router = useRouter()

  useEffect(() => {
    const url = new URL(window.location.href)
    url.search = ''
    window.history.replaceState(window.history.state, '', url.pathname)
  }, [])

  const animationDuration = 250

  function onDismiss() {
    setOpen(false)
    setTimeout(() => router.back(), animationDuration)
  }

  useEffect(() => {
    setOpen(true)
  }, [])

  return isLaptop ? (
    <Dialog open={open} onOpenChange={onDismiss}>
      <DialogContent className='wrapper w-full sm:max-w-4xl'>
        <DialogHeader>
          <DialogTitle className='sr-only'>Icon overview</DialogTitle>
          <DialogDescription className='sr-only'>Details about {iconName}</DialogDescription>
        </DialogHeader>
        <div className='px-4 pb-2 pt-4 max-h-[calc(100dvh-120px)] overflow-y-auto'>
          <IconSection iconName={iconName} showFullData={false} />
        </div>
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open={open} onOpenChange={onDismiss} showSwipeHandle>
      <DrawerContent className='wrapper max-w-4xl'>
        <DrawerHeader>
          <DrawerTitle className='sr-only'>Icon overview</DrawerTitle>
          <DrawerDescription className='sr-only'>Details about {iconName}</DrawerDescription>
        </DrawerHeader>
        <div className='overflow-y-auto px-4 pt-2 pb-12 md:pb-20 md:px-8 md:pt-6'>
          <IconSection iconName={iconName} showFullData={false} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
