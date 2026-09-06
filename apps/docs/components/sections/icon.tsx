'use client'

import { IconDownload } from '@andrsrxn/icons'
import type { IconCatalogEntry } from '@andrsrxn/raw-icons/types'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useCallback, useRef } from 'react'
import { useCopyToClipboard } from 'react-use'
import { ButtonCopy } from '@/components/shared/button-copy'
import { IconGridList } from '@/components/shared/icon-grid-list'
import { IconKeylineContainer } from '@/components/shared/icon-keyline-container'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CodeBlock } from '@/components/ui/code-block'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { ICON_PROPS, MAX_RELATED_ICONS } from '@/lib/constants/icons'
import { useIcon, useIconCatalog } from '@/lib/hooks/use-icon-catalog'
import { capitalize } from '@/lib/utils'
import { getIconComponentName, isUIIcon } from '@/lib/utils/icons'

export const IconSection = ({
  iconName,
  showFullData = true,
}: {
  iconName: string
  showFullData?: boolean
}) => {
  const [_, copyToClipboard] = useCopyToClipboard()

  const { catalog } = useIconCatalog()
  const icon = useIcon(iconName)

  if (!icon) {
    notFound()
  }

  const iconContainerRef = useRef<HTMLDivElement>(null)
  const componentName = getIconComponentName(icon.name, icon.group)

  const copyCodeExample = `import { ${componentName} } from '@andrsrxn/icons'

return <${componentName} />
`

  const isUI = isUIIcon(icon)

  const relatedIcons = showFullData
    ? catalog
        .filter((catalogIcon: IconCatalogEntry) =>
          isUI && isUIIcon(catalogIcon)
            ? catalogIcon.categories.some(category => icon.categories.includes(category)) &&
              catalogIcon.name !== icon.name
            : catalogIcon.tags.some(tag => icon.tags.includes(tag)) &&
              catalogIcon.name !== icon.name &&
              catalogIcon.group === 'flags'
        )
        .slice(0, MAX_RELATED_ICONS)
    : []

  const downloadRawSVG = useCallback(() => {
    const svg = iconContainerRef.current?.innerHTML ?? ''
    const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }))
    const a = document.createElement('a')
    a.href = url
    a.download = `${iconName}.svg`
    a.click()
    URL.revokeObjectURL(url)
  }, [iconName])

  const copyRawSVG = useCallback(() => {
    const svg = iconContainerRef.current?.innerHTML ?? ''
    copyToClipboard(svg)
  }, [copyToClipboard])

  return (
    <section>
      <div className='h-full '>
        <div className='flex flex-col gap-6 lg:gap-10 lg:flex-row overflow-hidden'>
          <IconKeylineContainer containerRef={iconContainerRef} icon={icon} />
          <div className='grid gap-6'>
            <div className='grid gap-3'>
              <div className='flex items-center gap-2'>
                <Tooltip>
                  <TooltipTrigger className='w-fit'>
                    {showFullData ? (
                      <h1 className='font-heading truncate text-3xl md:text-4xl leading-none font-bold'>
                        {icon.name}
                      </h1>
                    ) : (
                      <h3 className='font-heading truncate text-3xl md:text-4xl leading-none font-bold'>
                        {icon.name}
                      </h3>
                    )}
                  </TooltipTrigger>
                  <TooltipContent>Icon name</TooltipContent>
                </Tooltip>
                <ButtonCopy
                  aria-label='Copy icon name'
                  title='Copy'
                  value={icon.name}
                  size='icon-xs'
                  variant='outline'
                />
              </div>
              <div className='flex items-center gap-2'>
                <Tooltip>
                  <TooltipTrigger className='w-fit'>
                    <span className='font-body text-base md:text-lg leading-none text-muted-foreground'>
                      {componentName}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>Component name</TooltipContent>
                </Tooltip>
                <ButtonCopy
                  aria-label='Copy component name'
                  title='Copy'
                  value={componentName}
                  size='icon-xs'
                  variant='outline'
                />
              </div>

              <div className='flex flex-wrap items-center gap-2 mt-2'>
                <span className='sr-only'>Tags</span>
                {icon.tags.map(tag => (
                  <Badge
                    key={tag}
                    variant='outline'
                    render={
                      <Link href={`/?q=${tag}`} prefetch={false}>
                        <span className='leading-none'>{capitalize(tag)}</span>
                      </Link>
                    }
                  />
                ))}
              </div>
            </div>

            <CodeBlock
              aria-label='Example usage'
              code={copyCodeExample}
              language='tsx'
              filename='page'
            />

            <div className='grid grid-cols-2 gap-4'>
              <ButtonCopy variant='outline' value='' onClick={copyRawSVG}>
                Copy SVG
              </ButtonCopy>
              <Button variant='outline' onClick={downloadRawSVG}>
                <IconDownload />
                Download SVG
              </Button>
            </div>
          </div>
        </div>

        <Table className='mt-12 shadow-sm mb-2 w-[98%] ml-1 border-collapse overflow-hidden border rounded-lg'>
          <TableHeader>
            <TableRow>
              <TableHead>Props</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Default</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(ICON_PROPS[isUI ? 'ui' : 'flags']).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell className='font-medium text-primary'>{key}</TableCell>
                <TableCell>
                  <code className='text-sm text-muted-foreground bg-secondary/50 border rounded-sm px-1 py-0.5'>
                    {value.type}
                  </code>
                </TableCell>
                <TableCell>
                  <code className='text-sm text-muted-foreground bg-secondary/50 border rounded-sm px-1 py-0.5'>
                    {typeof value.default === 'function'
                      ? key === 'title'
                        ? iconName.toUpperCase()
                        : value.default(iconName)
                      : value.default}
                  </code>
                </TableCell>
                <TableCell>
                  <p className='w-full text-muted-foreground'>{value.description}</p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {showFullData && relatedIcons.length > 0 && (
          <div className='grid mt-20 gap-6'>
            <h2 className='font-heading text-2xl leading-none font-bold'>Related icons</h2>

            <IconGridList icons={relatedIcons} />
          </div>
        )}
      </div>
    </section>
  )
}
