import {
  IconBell,
  IconBookmark,
  IconBookmarkFilled,
  IconCalendar,
  IconCash,
  IconCheck,
  IconCheckCircle,
  IconChevronLeft,
  IconCircle,
  IconCircleFilled,
  IconClock,
  IconCreditCard,
  IconDatabase,
  IconDevicePc,
  IconDevices,
  IconFaceSmile,
  IconFilePdf,
  IconFileX,
  IconHeart,
  IconHeartFilled,
  IconHelp,
  IconHouse,
  IconInbox,
  IconKanban,
  IconKeyCommand,
  IconLike,
  IconLikeFilled,
  IconMail,
  IconMoon,
  IconPlus,
  IconReceipt,
  IconRefresh,
  IconSettings,
  IconShield,
  IconSignOut,
  IconSoundWave,
  IconSpinner,
  IconStar,
  IconStarFilled,
  IconStarSeal,
  IconSun,
  IconTeam,
  IconTrendDown,
  IconTrendUp,
  IconUpload,
  IconUser,
  IconUsers,
  IconVolumeHigh,
  IconX,
} from '@andrsrxn/icons'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { TreeItemDemo } from '@/components/shared/tree-item-demo'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from '@/components/ui/attachment'
import { Badge } from '@/components/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from '@/components/ui/field'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Item, ItemActions, ItemContent, ItemMedia, ItemTitle } from '@/components/ui/item'
import { Slider } from '@/components/ui/slider'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

const DropdownMenuItem = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div
      className={cn(
        'group/dropdown-menu-item relative flex cursor-pointer items-center gap-2 rounded-md px-1.5 py-1.5 [&_svg]:size-4 text-sm outline-hidden select-none hover:bg-accent hover:text-accent-foreground',
        className
      )}>
      {children}
    </div>
  )
}

export default function ExamplesPage() {
  return (
    <section className='py-10'>
      <div className='wrapper lg:max-w-7xl'>
        <Link
          href='/'
          prefetch={false}
          className='text-primary w-fit leading-none hover:underline flex items-center gap-1 decoration-1 underline-offset-2 mb-8'>
          <IconChevronLeft className='size-4' />
          Back to icons
        </Link>
        <h1 className='text-3xl font-bold tracking-tight md:text-4xl'>Examples</h1>
        <p className='text-muted-foreground w-11/12 mt-2 max-w-md text-base text-pretty'>
          See our icons in action with real life use cases
        </p>
      </div>

      <div className='overflow-x-auto scroll-fade-x overflow-y-clip px-[5%]'>
        <div className='grid grid-cols-4 w-275 xl:max-w-6xl xl:zoom-110 xl:wrapper lg:w-7xl lg:px-0 xl:w-full lg:zoom-105 gap-6 animate-in zoom-in-85 duration-600 ease-in-out fade-in py-8'>
          <div className='grid gap-6 h-max '>
            <div
              className={
                'w-full overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-none'
              }>
              <DropdownMenuItem>
                <IconUser /> Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconCash /> Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconSettings /> Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconBell /> Notification
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconKeyCommand /> Shortcuts
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <IconUsers /> Team
              </DropdownMenuItem>

              <DropdownMenuItem>
                <IconTeam /> New team
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <IconShield /> Security
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconDatabase /> API
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconHelp /> Support
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='text-destructive bg-destructive/5 hover:bg-destructive/10 hover:text-destructive'>
                <IconSignOut /> Sign out
              </DropdownMenuItem>
            </div>

            <div className='flex items-center justify-center gap-2'>
              <Badge
                variant='secondary'
                className='bg-green-50 break-inside-avoid border-green-300 text-green-900 dark:bg-green-950 dark:border-green-700 dark:text-green-100'>
                <IconTrendUp /> 20.5%{' '}
              </Badge>
              <Badge
                variant='secondary'
                className='bg-red-50 break-inside-avoid border-red-300 text-red-900 dark:bg-red-950 dark:border-red-700 dark:text-red-100'>
                <IconTrendDown /> 45%{' '}
              </Badge>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button size='icon-sm' className='ml-2' variant='outline'>
                      <IconHelp />
                    </Button>
                  }
                />

                <TooltipContent>Information</TooltipContent>
              </Tooltip>
            </div>
            <Button className='break-inside-avoid'>
              <IconPlus /> Add item
            </Button>
            <div
              className={
                'w-full break-inside-avoid overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-none'
              }>
              <DropdownMenuItem>
                <IconSun /> Light
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconMoon /> Dark
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconDevicePc /> System
              </DropdownMenuItem>
            </div>
          </div>
          <div className='grid h-max gap-6'>
            <Alert className='h-max bg-green-50 border-green-300 text-green-950 dark:bg-green-950 dark:border-green-700 dark:text-green-50'>
              <IconCheckCircle />
              <AlertTitle>Payment successful</AlertTitle>
              <AlertDescription className='text-green-900! dark:text-green-200!'>
                Your payment has been processed. Receipt has been sent to your email.
              </AlertDescription>
            </Alert>
            <div className='flex justify-center items-center'>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href='/' aria-label='Go to home'>
                      <IconHouse className='size-4' />
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href='/examples'>Examples</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <Attachment state='idle' className='w-full'>
              <AttachmentMedia>
                <IconClock />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>selected-file.pdf</AttachmentTitle>
                <AttachmentDescription>Ready to upload</AttachmentDescription>
              </AttachmentContent>
              <AttachmentActions>
                <AttachmentAction aria-label='Remove selected-file.pdf'>
                  <IconX />
                </AttachmentAction>
              </AttachmentActions>
            </Attachment>
            <Attachment state='uploading' className='w-full'>
              <AttachmentMedia>
                <IconSpinner className='animate-spin' />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>design-system.zip</AttachmentTitle>
                <AttachmentDescription>Uploading · 64%</AttachmentDescription>
              </AttachmentContent>
              <AttachmentActions>
                <AttachmentAction aria-label='Cancel upload'>
                  <IconX />
                </AttachmentAction>
              </AttachmentActions>
            </Attachment>
            <Attachment state='processing' className='w-full'>
              <AttachmentMedia>
                <IconFilePdf />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>market-research.pdf</AttachmentTitle>
                <AttachmentDescription>Processing document</AttachmentDescription>
              </AttachmentContent>
              <AttachmentActions>
                <AttachmentAction aria-label='Remove market-research.pdf'>
                  <IconX />
                </AttachmentAction>
              </AttachmentActions>
            </Attachment>
            <Attachment state='error' className='w-full'>
              <AttachmentMedia>
                <IconFileX />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>financial-model.xlsx</AttachmentTitle>
                <AttachmentDescription>Upload failed. Try again.</AttachmentDescription>
              </AttachmentContent>
              <AttachmentActions>
                <AttachmentAction aria-label='Retry upload'>
                  <IconRefresh />
                </AttachmentAction>
                <AttachmentAction aria-label='Remove financial-model.xlsx'>
                  <IconX />
                </AttachmentAction>
              </AttachmentActions>
            </Attachment>
            <Attachment state='done' className='w-full'>
              <AttachmentMedia>
                <IconCheck />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>uploaded-report.pdf</AttachmentTitle>
                <AttachmentDescription>Uploaded · 1.8 MB</AttachmentDescription>
              </AttachmentContent>
              <AttachmentActions>
                <AttachmentAction aria-label='Remove uploaded-report.pdf'>
                  <IconX />
                </AttachmentAction>
              </AttachmentActions>
            </Attachment>

            <ButtonGroup className='w-full'>
              <ButtonGroup>
                <Button variant='outline' size='icon'>
                  <IconPlus />
                </Button>
              </ButtonGroup>
              <ButtonGroup className='w-full'>
                <InputGroup className='bg-card'>
                  <InputGroupInput placeholder='Send a message...' />
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <InputGroupAddon align='inline-end'>
                          <IconSoundWave />
                        </InputGroupAddon>
                      }
                    />
                    <TooltipContent>Voice Mode</TooltipContent>
                  </Tooltip>
                </InputGroup>
              </ButtonGroup>
            </ButtonGroup>
          </div>
          <div className='grid gap-6 h-max'>
            <ToggleGroup variant='outline' multiple className='w-full justify-center'>
              <ToggleGroupItem value='circle' aria-label='Toggle circle'>
                <IconCircle className='group-aria-pressed/toggle:hidden' />
                <IconCircleFilled className='group-aria-pressed/toggle:block hidden' />
              </ToggleGroupItem>
              <ToggleGroupItem value='like' aria-label='Toggle like'>
                <IconLike className='group-aria-pressed/toggle:hidden' />
                <IconLikeFilled className='group-aria-pressed/toggle:block hidden' />
              </ToggleGroupItem>
              <ToggleGroupItem value='bookmark' aria-label='Toggle bookmark'>
                <IconBookmark className='group-aria-pressed/toggle:hidden' />
                <IconBookmarkFilled className='group-aria-pressed/toggle:block hidden' />
              </ToggleGroupItem>
              <ToggleGroupItem value='heart' aria-label='Toggle heart'>
                <IconHeart className='group-aria-pressed/toggle:hidden' />
                <IconHeartFilled className='group-aria-pressed/toggle:block hidden' />
              </ToggleGroupItem>
              <ToggleGroupItem value='star' aria-label='Toggle star'>
                <IconStar className='group-aria-pressed/toggle:hidden' />
                <IconStarFilled className='group-aria-pressed/toggle:block hidden' />
              </ToggleGroupItem>
            </ToggleGroup>
            <Item
              variant='outline'
              size='sm'
              className='bg-blue-50 hover:bg-blue-100! border-blue-300 dark:bg-blue-950 dark:border-blue-700 dark:text-blue-50 dark:hover:bg-blue-950!'>
              <ItemMedia>
                <IconStarSeal className='text-blue-700 size-5' />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className='text-blue-900 leading-none dark:text-blue-50'>
                  Your profile has been verified.
                </ItemTitle>
              </ItemContent>
            </Item>

            <InputGroup className='bg-card'>
              <InputGroupInput defaultValue='hello@example.com' placeholder='Email address' />
              <InputGroupAddon>
                <IconMail />
              </InputGroupAddon>
              <InputGroupAddon align='inline-end'>
                <IconCheck className='text-green-600' />
              </InputGroupAddon>
            </InputGroup>
            <TreeItemDemo />
            <FieldLabel>
              <Field orientation='horizontal'>
                <Checkbox defaultChecked id='toggle-checkbox-2' name='toggle-checkbox-2' />
                <FieldContent>
                  <FieldTitle>Enable notifications</FieldTitle>
                  <FieldDescription>
                    You can enable or disable notifications at any time.
                  </FieldDescription>
                </FieldContent>
              </Field>
            </FieldLabel>
          </div>
          <div className='grid gap-6 h-max'>
            <Item variant='outline'>
              <ItemMedia variant='icon'>
                <IconVolumeHigh />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Volume</ItemTitle>
              </ItemContent>
              <ItemActions className='flex-1'>
                {/** biome-ignore lint/style/noMagicNumbers: unnecessary */}
                <Slider defaultValue={[50]} min={0} max={100} />
              </ItemActions>
            </Item>
            <Command className='max-w-sm rounded-lg border'>
              <CommandInput placeholder='Type a command or search...' />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading='Suggestions'>
                  <CommandItem>
                    <IconCalendar />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <IconFaceSmile />
                    <span>Emoji</span>
                  </CommandItem>
                  <CommandItem>
                    <IconDevices />
                    <span>Devices</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading='Actions'>
                  <CommandItem>
                    <IconInbox />
                    <span>Inbox</span>
                    <CommandShortcut className='flex items-center gap-1'>
                      <IconKeyCommand className='size-3' />P
                    </CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <IconCreditCard />
                    <span>Payments</span>
                    <CommandShortcut className='flex items-center gap-1'>
                      <IconKeyCommand className='size-3' />B
                    </CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <IconReceipt />
                    <span>Invoices</span>
                    <CommandShortcut className='flex items-center gap-1'>
                      <IconKeyCommand className='size-3' />S
                    </CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant='icon'>
                  <IconKanban />
                </EmptyMedia>
                <EmptyTitle>No Projects Yet</EmptyTitle>
                <EmptyDescription>
                  You haven&apos;t created any projects yet. Get started by creating your first
                  project.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent className='flex-row justify-center gap-2'>
                <Button variant='outline'>
                  <IconUpload /> Import Project
                </Button>
              </EmptyContent>
            </Empty>
          </div>
        </div>
      </div>
    </section>
  )
}
