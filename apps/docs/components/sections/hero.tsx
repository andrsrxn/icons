import {
  IconBluetooth,
  IconBrain,
  IconBug,
  IconCalendarSearch,
  IconCamping,
  IconChartBubble,
  IconChevronRight,
  IconCookie,
  IconDevices,
  IconDiff,
  IconDownload,
  IconFaceFilter,
  IconFlame,
  IconHandPointer,
  IconHeart,
  IconHeartHandshake,
  IconLike,
  IconMessageDots,
  IconMoon,
  IconResend,
  IconRobot,
  IconRocket,
  IconSettings,
  IconStar,
  IconTrafficCone,
  IconTrophy,
  IconUsers,
} from '@andrsrxn/icons'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import { InputCopy } from '@/components/shared/input-copy'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { COMPANY } from '@/lib/constants/company'
import { IMAGES } from '@/lib/constants/media'
import { cn } from '@/lib/utils'

const IconContainer = ({
  children,
  className,
  side,
  ...props
}: {
  children: React.ReactNode
  className?: string
  side: 'left' | 'right'
} & ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'absolute size-9 border [&>svg]:size-6 pointer-events-auto transition flex items-center justify-center rounded-lg bg-card shadow-sm hover:scale-105',
        side === 'left' ? 'hover:-rotate-15' : 'hover:rotate-15',
        className
      )}
      {...props}>
      {children}
    </div>
  )
}

export const HeroSection = () => {
  return (
    <section className='py-12 lg:py-16 overflow-hidden bg-dotted dark:bg-dotted-dark relative flex items-center justify-center'>
      <div className='wrapper max-w-6xl flex flex-col gap-6 items-center'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <img src={IMAGES.brand.symbol.svg} alt={`${COMPANY.name} symbol`} className='size-14' />
          <h1 className='text-3xl md:text-4xl font-bold tracking-tight text-center'>
            {COMPANY.fullName}
          </h1>
          <p className='text-muted-foreground max-w-md w-11/12 text-center text-pretty text-base'>
            {COMPANY.description}
          </p>
        </div>
        <Tabs defaultValue='pnpm'>
          <TabsList variant='line'>
            <TabsTrigger value='pnpm'>pnpm</TabsTrigger>
            <TabsTrigger value='npm'>npm</TabsTrigger>
            <TabsTrigger value='yarn'>yarn</TabsTrigger>
            <TabsTrigger value='bun'>bun</TabsTrigger>
          </TabsList>

          <TabsContent value='pnpm'>
            <InputCopy className='lg:zoom-110' value='pnpm add @andrsrxn/icons' />
          </TabsContent>
          <TabsContent value='npm'>
            <InputCopy className='lg:zoom-110' value='npm install @andrsrxn/icons' />
          </TabsContent>
          <TabsContent value='yarn'>
            <InputCopy className='lg:zoom-110' value='yarn add @andrsrxn/icons' />
          </TabsContent>
          <TabsContent value='bun'>
            <InputCopy className='lg:zoom-110' value='bun add @andrsrxn/icons' />
          </TabsContent>
        </Tabs>
        <div className='flex justify-center gap-2 gap-y-3 flex-wrap'>
          <Badge variant='outline'>v{COMPANY.repo.version}</Badge>
          <Badge variant='outline'>No dependencies</Badge>
          <Badge variant='outline'>ESM only</Badge>
          <Badge variant='outline'>Commercial use</Badge>
          <Badge
            render={
              <Link
                href={COMPANY.repo.url}
                rel='noopener noreferrer'
                target='_blank'
                prefetch={false}
              />
            }
            variant='outline'
            className='dark dark:bg-white dark:text-black dark:hover:bg-white/80 dark:hover:text-black/80'>
            <IconStar className='text-amber-300 dark:text-amber-500' /> Star on Github
          </Badge>
        </div>
        <div
          aria-hidden
          className='absolute will-change-transform hidden pointer-events-none select-none lg:w-160 md:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-110 animate-in zoom-in-85 duration-1000 ease-in-out fade-in lg:zoom-105 '>
          {/* Left side */}
          <IconContainer className='top-[40%] -left-5' side='left' title='rocket'>
            <IconRocket />
          </IconContainer>
          <IconContainer className='top-[20%] -left-12' side='left' title='resend'>
            <IconResend />
          </IconContainer>
          <IconContainer className='top-[5%] left-2' side='left' title='bug'>
            <IconBug />
          </IconContainer>
          <IconContainer className='top-[60%] -left-16' side='left' title='devices'>
            <IconDevices />
          </IconContainer>
          <IconContainer className='top-[80%] -left-20' side='left' title='diff'>
            <IconDiff />
          </IconContainer>
          <IconContainer className='top-[90%] left-2' side='left' title='robot'>
            <IconRobot />
          </IconContainer>
          <IconContainer className='top-[25%] left-15' side='left' title='heart-handshake'>
            <IconHeartHandshake />
          </IconContainer>
          <IconContainer className='top-[10%] -left-35' side='left' title='calendar-search'>
            <IconCalendarSearch />
          </IconContainer>
          <IconContainer className='top-[35%] -left-30' side='left' title='trophy'>
            <IconTrophy />
          </IconContainer>
          <IconContainer className='top-[65%] -left-45' side='left' title='camping'>
            <IconCamping />
          </IconContainer>
          <IconContainer className='top-[88%] -left-40' side='left' title='settings'>
            <IconSettings />
          </IconContainer>
          <IconContainer className='top-[55%] left-10' side='left' title='users'>
            <IconUsers />
          </IconContainer>
          {/* Right side */}
          <IconContainer className='top-[40%] -right-5' side='right' title='face-filter'>
            <IconFaceFilter />
          </IconContainer>
          <IconContainer className='top-[20%] -right-12' side='right' title='brain'>
            <IconBrain />
          </IconContainer>
          <IconContainer className='top-[5%] right-2' side='right' title='cookie'>
            <IconCookie />
          </IconContainer>
          <IconContainer className='top-[60%] -right-16' side='right' title='moon'>
            <IconMoon />
          </IconContainer>
          <IconContainer className='top-[80%] -right-20' side='right' title='chart-bubble'>
            <IconChartBubble />
          </IconContainer>
          <IconContainer className='top-[90%] right-2' side='right' title='like'>
            <IconLike />
          </IconContainer>
          <IconContainer className='top-[25%] right-15' side='right' title='bluetooth'>
            <IconBluetooth />
          </IconContainer>
          <IconContainer className='top-[10%] -right-35' side='right' title='traffic-cone'>
            <IconTrafficCone />
          </IconContainer>
          <IconContainer className='top-[35%] -right-30' side='right' title='hand-pointer'>
            <IconHandPointer />
          </IconContainer>
          <IconContainer className='top-[65%] -right-45' side='right' title='flame'>
            <IconFlame />
          </IconContainer>
          <IconContainer className='top-[88%] -right-40' side='right' title='download'>
            <IconDownload />
          </IconContainer>
          <IconContainer className='top-[55%] right-10' side='right' title='message-dots'>
            <IconMessageDots />
          </IconContainer>
        </div>
        <div className='flex items-center gap-4 mt-2'>
          <Link
            href='/docs'

            className='text-primary hover:underline flex items-center gap-1 decoration-1 underline-offset-2'>
            Documentation
            <IconChevronRight className='size-4' />
          </Link>
          <Link
            href='/examples'

            className='text-primary hover:underline flex items-center gap-1 decoration-1 underline-offset-2'>
            Examples
            <IconChevronRight className='size-4' />
          </Link>
        </div>
      </div>
    </section>
  )
}
