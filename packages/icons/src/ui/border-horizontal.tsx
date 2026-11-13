import type { Icon } from './types'

export const IconBorderHorizontal: Icon = ({
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
      data-slot='icon-ui-border-horizontal'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M21.24 15.27c0 2.82 0 4.24-.88 5.12s-2.3.88-5.12.88H8.76c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V8.79c0-2.83 0-4.25.88-5.13s2.29-.87 5.12-.87h6.48c2.83 0 4.24 0 5.12.87.88.88.88 2.3.88 5.13z'
        fill='currentColor'
      />
      <path d='M12 15.39V8.66' stroke='currentColor' />
      <path d='M15.36 12.03H8.63' stroke='currentColor' />
      <path
        d='M18.67 21.26a2.56 2.56 0 0 0 2.57-2.56V5.35a2.57 2.57 0 0 0-2.57-2.57'
        stroke='currentColor'
      />
      <path d='M10.71 21.22h2.6' stroke='currentColor' />
      <path d='M10.71 2.74h2.6' stroke='currentColor' />
      <path
        d='M5.34 2.72a2.57 2.57 0 0 0-2.57 2.56v13.35a2.57 2.57 0 0 0 2.57 2.57'
        stroke='currentColor'
      />
    </svg>
  )
}
