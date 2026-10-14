import type { Icon } from './types'

export const IconDropShadow: Icon = ({
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
      data-slot='icon-ui-drop-shadow'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M14.98 22.99c2.83 0 4.25 0 5.13-.88s.87-2.3.87-5.12v-1.3l-.44.42a6 6 0 0 1-1.64 1.28c-.47.2-1 .24-2.05.3l-4.87.33-4.8-.33a7 7 0 0 1-1.9-.27 6 6 0 0 1-1.55-1.12l-.71-.6v1.29c0 2.83 0 4.24.88 5.12.87.88 2.29.88 5.12.88z'
        fill='currentColor'
      />
      <rect
        width='15.94'
        height='16.86'
        rx='3'
        transform='matrix(0 -1 -1 0 20.43 17.79)'
        stroke='currentColor'
      />
    </svg>
  )
}
