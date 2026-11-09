import type { Icon } from './types'

export const IconMosaic: Icon = ({
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
      data-slot='icon-ui-mosaic'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M4.74 2.74h14.52c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7v7.06c0 1.44 0 2.16-.47 2.45s-1.12-.02-2.4-.65L3.86 6.55c-.55-.27-.82-.4-.98-.65-.15-.24-.15-.54-.15-1.15 0-.95 0-1.42.3-1.72.29-.29.76-.29 1.7-.29'
        fill='currentColor'
      />
      <path
        d='M2.74 13.26v-2.52c0-3.77 0-5.65 1.17-6.83 1.18-1.17 3.06-1.17 6.83-1.17h2.52c3.77 0 5.65 0 6.83 1.17 1.17 1.18 1.17 3.06 1.17 6.83v2.52c0 3.77 0 5.65-1.17 6.83-1.18 1.17-3.06 1.17-6.83 1.17h-2.52c-3.77 0-5.65 0-6.83-1.17-1.17-1.18-1.17-3.06-1.17-6.83'
        stroke='currentColor'
      />
      <path d='m3 6 18.26 9' stroke='currentColor' />
      <path d='m8 21 6-9.42' stroke='currentColor' />
    </svg>
  )
}
