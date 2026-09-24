import type { Icon } from './types'

export const IconAspectRatio: Icon = ({
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
      data-slot='icon-ui-aspect-ratio'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='18.68'
        height='18.68'
        rx='3'
        transform='scale(1 -1)rotate(90 21.34 0)'
        fill='currentColor'
      />
      <rect
        width='18.68'
        height='18.68'
        rx='3'
        transform='scale(1 -1)rotate(90 21.34 0)'
        stroke='currentColor'
      />
      <path
        d='M11.75 6.58h-1.16c-1.89 0-2.83 0-3.42.59-.59.58-.59 1.53-.59 3.41v1.17'
        stroke='currentColor'
      />
      <path
        d='M12.25 17.32h1.16c1.89 0 2.83 0 3.42-.58s.59-1.53.59-3.42v-1.16'
        stroke='currentColor'
      />
    </svg>
  )
}
