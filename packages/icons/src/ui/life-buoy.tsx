import type { Icon } from './types'

export const IconLifeBuoy: Icon = ({
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
      data-slot='icon-ui-life-buoy'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M7.98 15.83 5.27 18.6a1 1 0 0 1-1.56-.16l-1.7-2.68a1 1 0 0 1-.16-.46l-.37-4.6a1 1 0 0 1 .13-.58l2.38-4.21a1 1 0 0 1 1.51-.28l2.53 2.1a1 1 0 0 1 .3 1.1l-.98 2.83a1 1 0 0 0 0 .66l.86 2.47a1 1 0 0 1-.23 1.03'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m16.25 15.83 2.71 2.78a1 1 0 0 0 1.56-.16l1.71-2.68a1 1 0 0 0 .15-.46l.37-4.6a1 1 0 0 0-.12-.58l-2.39-4.21a1 1 0 0 0-1.5-.28l-2.54 2.1a1 1 0 0 0-.3 1.1l.99 2.83a1 1 0 0 1 0 .66l-.87 2.47a1 1 0 0 0 .23 1.03'
        fill='currentColor'
      />
      <circle cx='11.98' cy='12' r='4.75' transform='rotate(90 11.98 12)' stroke='currentColor' />
      <circle cx='11.98' cy='12' r='10.29' transform='rotate(90 11.98 12)' stroke='currentColor' />
      <path d='M8.24 8.26 4.8 4.82' stroke='currentColor' />
      <path d='m19.1 19.12-3.64-3.63' stroke='currentColor' />
      <path d='m19.22 4.77-3.7 3.69' stroke='currentColor' />
      <path d='m8.42 15.57-3.56 3.56' stroke='currentColor' />
    </svg>
  )
}
