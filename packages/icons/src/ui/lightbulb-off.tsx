import type { Icon } from './types'

export const IconLightbulbOff: Icon = ({
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
      data-slot='icon-ui-lightbulb-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='8.81' y='17.05' width='6.11' height='5.25' rx='1' fill='currentColor' />
      <path
        d='m15.33 17.16.01-.55c.06-.59.15-.8.57-1.21.06-.07.28-.24.7-.6a7.6 7.6 0 0 0 2.57-5.88 7.32 7.32 0 0 0-14.63 0 7.5 7.5 0 0 0 3.08 6.27c.59.46.76.8.77 1.56v.14'
        stroke='currentColor'
      />
      <path d='M15.33 17.06H8.65' stroke='currentColor' />
      <path
        d='M8.4 17.06v1.78c0 1.37 0 2.06.32 2.56a2 2 0 0 0 .58.58c.5.33 1.19.33 2.56.33s2.07 0 2.56-.33a2 2 0 0 0 .59-.58c.32-.5.32-1.19.32-2.56v-1.78'
        stroke='currentColor'
      />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
      <path d='M7.7 9.38c0-.86.18-1.54.57-2.3a4 4 0 0 1 1.7-1.7' stroke='currentColor' />
    </svg>
  )
}
