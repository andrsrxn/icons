import type { Icon } from './types'

export const IconArticleSparkle: Icon = ({
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
      data-slot='icon-ui-article-sparkle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M18.78 15.14c0 1.8-1.95 3.77-3.77 3.77' stroke='currentColor' />
      <path d='M18.78 15.14c0 1.81 1.97 3.77 3.78 3.77' stroke='currentColor' />
      <path d='M18.78 22.69c0-1.78-1.96-3.78-3.77-3.78' stroke='currentColor' />
      <path d='M18.78 22.69c0-1.8 1.99-3.78 3.78-3.78' stroke='currentColor' />
      <path
        opacity='.2'
        d='M20 8.72c0-3.3 0-4.95-1.03-5.98C17.95 1.72 16.3 1.72 13 1.72h-2c-3.3 0-4.95 0-5.97 1.02C4 3.77 4 5.42 4 8.72v6.56c0 3.3 0 4.95 1.03 5.98 1.02 1.02 2.67 1.02 5.97 1.02h7.79l-2.4-3.26 2.4-2.8 1.21 1.3zm-3.62-.49a2.4 2.4 0 0 1-2.41 2.42h-3.9a2.41 2.41 0 0 1 0-4.83h3.9a2.4 2.4 0 0 1 2.41 2.41'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M20 11.52v-2.8c0-3.3 0-4.95-1.03-5.98C17.95 1.72 16.3 1.72 13 1.72h-2c-3.3 0-4.95 0-5.97 1.02C4 3.77 4 5.42 4 8.72v6.56c0 3.3 0 4.95 1.03 5.98 1.02 1.02 2.67 1.02 5.97 1.02h1.7'
        stroke='currentColor'
      />
      <path
        d='M13.9 10.74h-3.8c-.98 0-1.46 0-1.82-.22a1.5 1.5 0 0 1-.51-.5c-.22-.36-.22-.85-.22-1.82v0c0-.97 0-1.46.22-1.82q.2-.31.5-.5c.37-.22.85-.22 1.82-.22h3.82c.97 0 1.45 0 1.81.22q.32.19.51.5c.22.36.22.85.22 1.82v0c0 .97 0 1.46-.22 1.82q-.2.31-.5.5c-.37.22-.85.22-1.82.22'
        stroke='currentColor'
      />
      <path d='M7.96 14.53h5.5' stroke='currentColor' />
      <path d='M7.96 18.34h4.21' stroke='currentColor' />
    </svg>
  )
}
