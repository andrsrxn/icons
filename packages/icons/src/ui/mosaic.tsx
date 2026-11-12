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
        d='M5.56 2.74h7.7c3.77 0 5.65 0 6.83 1.17 1.17 1.18 1.17 3.06 1.17 6.83v1.06c0 1.44 0 2.16-.47 2.45s-1.12-.02-2.4-.65L3.13 6.2a.7.7 0 0 1-.4-.64 2.8 2.8 0 0 1 2.82-2.82'
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
