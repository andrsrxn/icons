import type { Icon } from './types'

export const IconShuffle: Icon = ({
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
      data-slot='icon-ui-shuffle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M2.34 7.05h1.1c1.71 0 2.56 0 3.32.33.76.32 1.35.94 2.51 2.19L14.4 15c1.16 1.24 1.75 1.86 2.5 2.2.77.32 1.62.32 3.32.32h1'
        stroke='currentColor'
      />
      <path
        d='M2.34 17.52h1.07c1.72 0 2.58 0 3.35-.33.77-.34 1.35-.97 2.52-2.23l4.95-5.35c1.17-1.26 1.76-1.9 2.52-2.23.77-.33 1.63-.33 3.35-.33h1.12'
        stroke='currentColor'
      />
      <path
        d='m19.3 3.86.36.36c1.34 1.33 2 2 2 2.82 0 .83-.66 1.5-2 2.83l-.35.36'
        stroke='currentColor'
      />
      <path
        d='m19.3 14.34.36.35c1.34 1.33 2 2 2 2.83s-.66 1.5-2 2.83l-.35.35'
        stroke='currentColor'
      />
    </svg>
  )
}
