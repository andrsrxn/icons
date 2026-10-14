import type { Icon } from './types'

export const IconArticleSparkle: Icon = ({
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
      data-slot='icon-ui-article-sparkle'
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
        d='M20 5.72c0-1.89 0-2.83-.59-3.42-.58-.58-1.52-.58-3.41-.58H8c-1.89 0-2.83 0-3.41.58C4 2.9 4 3.83 4 5.72v12.56c0 1.89 0 2.83.59 3.42.58.58 1.52.58 3.41.58h10.76l-2.38-3.45 2.09-2.41L20 17.44zm-3.62 2.65v.2a2 2 0 0 1-1.9 1.91H9.57a2 2 0 0 1-1.91-1.9v-.43a2 2 0 0 1 1.9-1.9h4.91a2 2 0 0 1 1.91 2.12'
        fill='currentColor'
      />
      <path
        d='M13.11 22.28H10c-2.83 0-4.24 0-5.12-.88S4 19.11 4 16.28V7.72c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h4c2.83 0 4.24 0 5.12.88S20 4.9 20 7.72v3.67'
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
      <path d='M7.63 18.22h3.97' stroke='currentColor' />
      <path d='M15 18.91c1.83 0 3.78-1.96 3.78-3.77' stroke='currentColor' />
      <path d='M22.56 18.91c-1.81 0-3.78-1.96-3.78-3.77' stroke='currentColor' />
      <path d='M15 18.91c1.82 0 3.78 2 3.78 3.78' stroke='currentColor' />
      <path d='M22.56 18.91c-1.8 0-3.78 1.98-3.78 3.78' stroke='currentColor' />
    </svg>
  )
}
