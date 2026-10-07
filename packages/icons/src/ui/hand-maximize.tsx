import type { Icon } from './types'

export const IconHandMaximize: Icon = ({
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
      data-slot='icon-ui-hand-maximize'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m13.18 5.74 1.73-.26 1.17.77-.18 4.97 2.62-.08.94 1.94 2.6.45-.95 7.67-1.42 1.39-3.76-.66-4.8-.73-3.19-4.06-1.53-3.76 2.23-1.36 2.73 2.13z'
        fill='currentColor'
      />
      <path d='m18.53 15.64.48-2.72a1.8 1.8 0 0 0-3.55-.62L15 15.03' stroke='currentColor' />
      <path
        d='m18.59 15.34.16-.92a1.8 1.8 0 0 1 3.54.62l-.62 3.56a8 8 0 0 1-1.95 3.78'
        stroke='currentColor'
      />
      <path d='m15.2 13.82 1.1-6.36a1.8 1.8 0 1 0-3.54-.62l-1.41 8.14' stroke='currentColor' />
      <path
        d='m11.29 14.94-1.7-1.89a1.84 1.84 0 0 0-2.55-.18 1.8 1.8 0 0 0-.42 2.29c.5.86 1.21 2.02 1.94 3.08a22 22 0 0 0 2.51 2.81'
        stroke='currentColor'
      />
      <path d='m2.97 9.43 2.27-2.28' stroke='currentColor' />
      <path d='M9.43 2.79 7.15 5.06' stroke='currentColor' />
      <path
        d='M5.24 10.38h-.23c-1.41 0-2.12 0-2.56-.43-.44-.44-.44-1.15-.44-2.57v-.23'
        stroke='currentColor'
      />
      <path d='M7.15 1.83h.23c1.42 0 2.12 0 2.56.44s.44 1.15.44 2.56v.23' stroke='currentColor' />
    </svg>
  )
}
