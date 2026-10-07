import type { Icon } from './types'

export const IconClockTwentyFour: Icon = ({
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
      data-slot='icon-ui-clock-twenty-four'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 22.25a10.25 10.25 0 1 0-9.79-7.2l2.59-.11v2.38l-1 .83a10.2 10.2 0 0 0 8.2 4.1'
        fill='currentColor'
      />
      <path d='M14.54 21.93a10.25 10.25 0 1 0-12.66-11.5' stroke='currentColor' />
      <path
        d='m17.1 14.73-2.71-1.8c-.87-.6-1.3-.88-1.55-1.32-.23-.45-.23-.97-.23-2.02V5.7'
        stroke='currentColor'
      />
      <path
        d='M10.23 20.96v-4.18c0-1.34 0-2.01-.36-2.12-.35-.1-.72.45-1.47 1.56l-.6.9c-.46.68-.69 1.02-.54 1.28.14.27.55.27 1.37.27h2.67'
        stroke='currentColor'
      />
      <path
        d='M1.65 15.7c.45-.54.87-.95 1.78-.95 1.6 0 1.87 1.87 1.06 2.82-.46.54-1.5 1.36-2.3 2.14-.41.4-.62.6-.5.92.14.3.45.3 1.09.3h2.16'
        stroke='currentColor'
      />
    </svg>
  )
}
