import type { Icon } from './types'

export const IconKeyframes: Icon = ({
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
      data-slot='icon-ui-keyframes'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M13.44 4.66a1.87 1.87 0 0 1 2.59.02l2.9 2.84 1.67 1.57c1.45 1.36 2.17 2.05 2.17 2.91s-.72 1.55-2.17 2.91l-1.67 1.57-3.07 2.96a1.76 1.76 0 0 1-2.57-2.4l2.1-2.48c1.1-1.31 1.66-1.97 1.63-2.74s-.62-1.38-1.82-2.62l-1.82-1.88c-.73-.75-.7-1.94.05-2.66'
        fill='currentColor'
      />
      <path
        d='m13.56 7.61-.1-.1c-2.02-2.06-3.02-3.09-4.28-3.09S6.9 5.45 4.89 7.52l-.1.1-.1.1C2.63 9.73 1.6 10.74 1.6 12s1.03 2.27 3.09 4.29l.1.1.1.1c2.02 2.06 3.02 3.09 4.29 3.09 1.26 0 2.26-1.03 4.28-3.1l.1-.1.1-.1c2.06-2.01 3.09-3.02 3.09-4.28s-1.03-2.27-3.09-4.28z'
        stroke='currentColor'
      />
      <path
        d='M11.94 18.02c.64.65.97.97 1.3 1.17a3 3 0 0 0 3.05-.02c.34-.2.66-.52 1.3-1.17l1.57-1.61.1-.1c2.06-2.02 3.1-3.03 3.1-4.29s-1.04-2.27-3.1-4.29l-.1-.1-1.7-1.73c-.52-.54-.79-.8-1.05-.98a3 3 0 0 0-3.29-.02c-.26.18-.53.44-1.06.97'
        stroke='currentColor'
      />
    </svg>
  )
}
