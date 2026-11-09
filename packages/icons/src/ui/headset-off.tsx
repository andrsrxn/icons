import type { Icon } from './types'

export const IconHeadsetOff: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-headset-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M5.65 18.36c1.15 0 1.72 0 2.16-.23a2 2 0 0 0 .84-.84c.23-.43.23-1 .23-2.16v-.94c0-1.15 0-1.72-.23-2.16a2 2 0 0 0-.84-.84c-.44-.23-1.01-.23-2.16-.23s-1.73 0-2.17.23a2 2 0 0 0-.83.84c-.23.44-.23 1.01-.23 2.16v.94c0 1.15 0 1.73.23 2.16a2 2 0 0 0 .83.84c.44.23 1.02.23 2.17.23'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M18.35 18.36c1.15 0 1.73 0 2.17-.23a2 2 0 0 0 .84-.84c.22-.43.22-1 .22-2.16v-.94c0-1.15 0-1.72-.22-2.16a2 2 0 0 0-.84-.84c-.44-.23-1.02-.23-2.17-.23s-1.72 0-2.16.23a2 2 0 0 0-.84.84c-.23.44-.23 1.01-.23 2.16v.94c0 1.15 0 1.73.23 2.16a2 2 0 0 0 .84.84c.44.23 1.01.23 2.16.23'
        fill='currentColor'
      />
      <path
        d='M13.16 22.2h4.42c1.89 0 2.83 0 3.42-.58.14-.14.17-.17.25-.35'
        stroke='currentColor'
      />
      <path d='M21.58 14.6v3.58' stroke='currentColor' />
      <path d='m3.88 10.95.15-1.8c.17-2 .3-3.43.58-4.48' stroke='currentColor' />
      <path
        d='m20.25 10.96-.1-1.63v0c-.22-3.56-.33-5.34-1.48-6.43-1.16-1.08-2.94-1.08-6.5-1.08H12c-2.74 0-4.4 0-5.55.51'
        stroke='currentColor'
      />
      <path
        d='M2.42 14.66c0 .82 0 1.23.07 1.57a3 3 0 0 0 2.24 2.23c.34.08.75.08 1.56.08.55 0 .82 0 1.05-.05a2 2 0 0 0 1.49-1.5c.05-.22.05-.49.05-1.03v-2.6c0-.54 0-.81-.05-1.04a2 2 0 0 0-1.5-1.49c-.22-.05-.49-.05-1.04-.05-.81 0-1.22 0-1.56.08a3 3 0 0 0-2.24 2.23c-.07.34-.07.75-.07 1.57'
        stroke='currentColor'
      />
      <path
        d='M15.12 15.12v.84c0 .54 0 .81.05 1.04a2 2 0 0 0 1.5 1.5c.22.04.49.04 1.04.04h.69'
        stroke='currentColor'
      />
      <path
        d='M21.58 14.66c0-.82 0-1.23-.07-1.57a3 3 0 0 0-2.24-2.23c-.34-.08-.75-.08-1.56-.08-.55 0-.82 0-1.05.05a2 2 0 0 0-1.01.6'
        stroke='currentColor'
      />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
