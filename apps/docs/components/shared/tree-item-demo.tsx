import { IconChevronRight, IconFile, IconFolder, IconFolderOpen } from '@andrsrxn/icons'
import { Fragment } from 'react/jsx-runtime'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export type FileTreeItem =
  { name: string; open?: boolean } | { name: string; items: FileTreeItem[]; open: boolean }

export const renderItem = (fileItem: FileTreeItem) => {
  if ('items' in fileItem) {
    return (
      <Fragment key={fileItem.name}>
        <div>
          <Button
            variant={fileItem.open ? 'secondary' : 'ghost'}
            size='sm'
            className='group w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground'>
            <IconChevronRight
              className={cn(
                'transition-transform group-data-[state=open]:rotate-90',
                fileItem.open ? 'rotate-90' : 'rotate-0'
              )}
            />
            {fileItem.open ? <IconFolderOpen /> : <IconFolder />}
            {fileItem.name}
          </Button>
        </div>
        {fileItem.items.length > 0 ? (
          <div className='mt-1 ml-5 style-lyra:ml-4'>
            <div className='flex flex-col gap-1'>
              {fileItem.items.map(child => renderItem(child))}
            </div>
          </div>
        ) : null}
      </Fragment>
    )
  }
  return (
    <Button
      key={fileItem.name}
      variant='link'
      size='sm'
      className='w-full justify-start gap-2 text-foreground'>
      <IconFile />
      <span>{fileItem.name}</span>
    </Button>
  )
}

export const TREE_ITEMS = [
  {
    name: 'lib',
    items: [],
  },

  {
    name: 'public',
    open: true,
    items: [{ name: 'favicon.ico' }, { name: 'logo.svg' }],
  },
  { name: '.gitignore' },
  { name: 'package.json' },
  { name: 'README.md' },
]

export const TreeItemDemo = () => {
  return (
    <Card className='p-0'>
      <CardContent className='p-2'>
        <div className='flex flex-col gap-1'>{TREE_ITEMS.map(item => renderItem(item))}</div>
      </CardContent>
    </Card>
  )
}
