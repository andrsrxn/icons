'use client'

import { type ComponentProps, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const HEADER_OFFSET = 80

interface TocTarget {
  id: string
  el: HTMLElement
}

function getTocTargets(): TocTarget[] {
  const links = document.querySelectorAll<HTMLAnchorElement>(
    'ul[aria-label="Table of contents"] a[href^="#"]'
  )
  const targets: TocTarget[] = []

  for (const link of links) {
    const id = link.getAttribute('href')?.slice(1)
    if (!id) {
      continue
    }

    const el = document.getElementById(id)
    if (el) {
      targets.push({ id, el })
    }
  }

  return targets
}

function getActiveIds(targets: TocTarget[]): string[] {
  const visible: string[] = []
  let lastPassedId: string | null = null

  for (const { id, el } of targets) {
    const rect = el.getBoundingClientRect()

    if (rect.bottom > HEADER_OFFSET && rect.top < window.innerHeight) {
      visible.push(id)
    }

    if (rect.top <= HEADER_OFFSET) {
      lastPassedId = id
    }
  }

  if (visible.length > 0) {
    return visible
  }
  return lastPassedId ? [lastPassedId] : []
}

export const TableOfContents = ({ className }: ComponentProps<'div'>) => {
  const [activeIds, setActiveIds] = useState<string[]>([])

  useEffect(() => {
    const targets = getTocTargets()

    const observer = new IntersectionObserver(() => setActiveIds(getActiveIds(targets)), {
      rootMargin: `-${HEADER_OFFSET}px 0px 0px 0px`,
      threshold: 0,
    })

    for (const { el } of targets) {
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  const isActive = (id: string) => activeIds.includes(id)

  return (
    <div className={cn('relative hidden lg:block w-44', className)}>
      <ul
        aria-label='Table of contents'
        className='text-sm pr-2 max-h-[calc(100dvh-120px)] text-muted-foreground overflow-y-auto scroll-fade-y [&_a]:hover:text-foreground [&_a[data-active=true]]:text-foreground [&_a[data-active=true]]:font-medium [&_a]:transition-colors list-disc marker:text-primary/50 [&_ul]:list-disc [&_ul]:marker:text-primary/50 [&_ul]:mt-1 [&_ul]:pl-4 [&_ul]:grid [&_ul]:gap-1 sticky top-22'>
        <li>
          <ul>
            <li>
              <a href='#overview' data-active={isActive('overview')}>
                Overview
              </a>
            </li>
            <li>
              <a
                href='#why-another-icon-library'
                data-active={isActive('why-another-icon-library')}>
                Why another icon library?
              </a>
            </li>
            <li>
              <a href='#categories' data-active={isActive('categories')}>
                Categories
              </a>
            </li>
            <li>
              <a href='#requirements' data-active={isActive('requirements')}>
                Requirements
              </a>
            </li>
            <li>
              <a href='#installation' data-active={isActive('installation')}>
                Installation
              </a>
            </li>

            <li>
              <a href='#usage' data-active={isActive('usage')}>
                Usage
              </a>
              <ul>
                <li>
                  <a href='#global-import' data-active={isActive('global-import')}>
                    Global import
                  </a>
                </li>
                <li>
                  <a href='#specific-import' data-active={isActive('specific-import')}>
                    Specific import
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href='#rtl-support' data-active={isActive('rtl-support')}>
                RTL support
              </a>
              <ul>
                <li>
                  <a href='#opt-in-icons' data-active={isActive('opt-in-icons')}>
                    Opt-in icons
                  </a>
                </li>
                <li>
                  <a href='#opt-out-icons' data-active={isActive('opt-out-icons')}>
                    Opt-out icons
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href='#naming' data-active={isActive('naming')}>
                Naming
              </a>
            </li>
            <li>
              <a href='#styling' data-active={isActive('styling')}>
                Styling
              </a>
              <ul>
                <li>
                  <a href='#size' data-active={isActive('size')}>
                    Size
                  </a>
                </li>
                <li>
                  <a href='#color' data-active={isActive('color')}>
                    Color
                  </a>
                </li>
                <li>
                  <a href='#stroke-width' data-active={isActive('stroke-width')}>
                    Stroke width
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href='#typescript' data-active={isActive('typescript')}>
                TypeScript
              </a>
              <ul>
                <li>
                  <a href='#props' data-active={isActive('props')}>
                    Props
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href='#contributing' data-active={isActive('contributing')}>
                Contributing
              </a>
            </li>
            <li>
              <a href='#support' data-active={isActive('support')}>
                Support
              </a>
            </li>
            <li>
              <a href='#inspiration' data-active={isActive('inspiration')}>
                Inspiration
              </a>
            </li>
            <li>
              <a href='#credits' data-active={isActive('credits')}>
                Credits
              </a>
            </li>
            <li>
              <a href='#license' data-active={isActive('license')}>
                License
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
