import type { Icon } from './types'

export const IconArticle: Icon = ({
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
      data-slot='icon-ui-article'
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
        d='M4 5.72c0-1.89 0-2.83.59-3.42.58-.58 1.52-.58 3.41-.58h8c1.89 0 2.83 0 3.41.58.59.6.59 1.53.59 3.42v12.56c0 1.89 0 2.83-.59 3.42-.58.58-1.52.58-3.41.58H8c-1.89 0-2.83 0-3.41-.58C4 21.1 4 20.17 4 18.28zm3.65 2.65v.2a2 2 0 0 0 1.91 1.91h4.91a2 2 0 0 0 1.91-1.9v-.43a2 2 0 0 0-1.9-1.9H9.57a2 2 0 0 0-1.91 1.9z'
        fill='currentColor'
      />
      <rect
        width='16'
        height='20.56'
        rx='3'
        transform='matrix(-1 0 0 1 20 1.72)'
        stroke='currentColor'
      />
      <rect
        width='9.34'
        height='4.96'
        rx='1.5'
        transform='matrix(-1 0 0 1 16.67 5.78)'
        stroke='currentColor'
      />
      <path d='M7.63 14.2H14' stroke='currentColor' />
      <path d='M7.63 18.22H14' stroke='currentColor' />
    </svg>
  )
}
