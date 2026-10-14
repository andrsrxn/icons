import type { Icon } from './types'

export const IconDrops: Icon = ({
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
      data-slot='icon-ui-drops'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M7.76 22.05c3.18 0 5.76-2.42 5.76-5.42 0-5.39-5.76-9.39-5.76-9.39S2 11.18 2 16.64c0 2.99 2.58 5.41 5.76 5.41'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M18.3 11.6c2.17 0 3.93-1.66 3.93-3.7 0-3.68-3.93-6.41-3.93-6.41s-3.94 2.68-3.94 6.4c0 2.05 1.76 3.71 3.94 3.71'
        fill='currentColor'
      />
      <path
        d='M7.76 22.05c3.18 0 5.76-2.42 5.76-5.42 0-3.32-2.07-6.04-3.73-7.68-.8-.8-1.2-1.2-2.03-1.2s-1.22.4-2.03 1.2C4.07 10.58 2 13.29 2 16.63c0 3 2.58 5.42 5.76 5.42'
        stroke='currentColor'
      />
      <path
        d='M18.3 11.6c2.17 0 3.93-1.66 3.93-3.7 0-2.19-1.31-3.99-2.42-5.12-.59-.6-.88-.9-1.51-.9s-.93.3-1.52.9c-1.1 1.12-2.42 2.92-2.42 5.12 0 2.04 1.76 3.7 3.94 3.7'
        stroke='currentColor'
      />
      <path
        d='M10.56 16.27a3.3 3.3 0 0 1-.81 1.77c-.54.65-1.15.95-1.8 1.15'
        stroke='currentColor'
      />
      <path d='M19.54 7.35a1.8 1.8 0 0 1-1.3 1.46' stroke='currentColor' />
    </svg>
  )
}
