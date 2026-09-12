import type { Icon } from './types'

export const IconBandage: Icon = ({
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
      data-slot='icon-ui-bandage'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='12.17'
        y='4.08'
        width='10.96'
        height='11.43'
        rx='2'
        transform='rotate(45 12.17 4.08)'
        fill='currentColor'
      />
      <rect
        x='15.64'
        y='.61'
        width='10.96'
        height='21.27'
        rx='3'
        transform='rotate(45 15.64 .6)'
        stroke='currentColor'
      />
      <path d='M19.75 12 12 4.25' stroke='currentColor' />
      <path d='m11.55 20.2-7.29-7.3' stroke='currentColor' />
      <path
        d='M12.17 15.07a.53.53 0 1 1-.75-.75.53.53 0 0 1 .75.75'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.58 9.68a.53.53 0 1 1-.75-.75.53.53 0 0 1 .75.75'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
