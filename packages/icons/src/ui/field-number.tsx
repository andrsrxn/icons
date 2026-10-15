import type { Icon } from './types'

export const IconFieldNumber: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-field-number'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='12.42'
        height='20.61'
        rx='3'
        transform='matrix(0 -1 -1 0 22.3 18.21)'
        fill='currentColor'
      />
      <path
        d='m5.06 11.3.44-.4c.72-.64 1.08-.96 1.38-.83s.3.61.3 1.58v2.95'
        stroke='currentColor'
      />
      <path
        d='M10.46 10.58c.38-.42.75-.74 1.53-.74 1.39 0 1.61 1.44.92 2.17-.35.36-1.05.87-1.68 1.4-.43.35-.65.52-.53.85.12.34.42.34 1.03.34h1.56'
        stroke='currentColor'
      />
      <path
        d='M16.39 10.27c.4-.26.64-.43 1.31-.43 1.2 0 1.56 1.38.96 1.94-.6.55-1.49.43-1.49.43'
        stroke='currentColor'
      />
      <path
        d='M16.43 14.21c.4.24.6.39 1.27.39 1.2 0 1.56-1.38.96-1.94-.6-.55-1.49-.43-1.49-.43'
        stroke='currentColor'
      />
      <rect
        width='12.42'
        height='20.61'
        rx='3'
        transform='matrix(0 -1 -1 0 22.3 18.21)'
        stroke='currentColor'
      />
    </svg>
  )
}
