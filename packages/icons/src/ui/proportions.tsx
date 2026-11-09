import type { Icon } from './types'

export const IconProportions: Icon = ({
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
      data-slot='icon-ui-proportions'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.24 8.32c0-1.88 0-2.83-.59-3.41-.58-.59-1.53-.59-3.41-.59H4.48c-.67 0-1 0-1.28.08a2 2 0 0 0-1.36 1.36c-.08.27-.08.61-.08 1.28 0 .68 0 1.01.08 1.29A2 2 0 0 0 3.2 9.69c.28.08.61.08 1.28.08h1.47c1.89 0 2.83 0 3.42.58.58.59.58 1.53.58 3.42v1.9c0 1.9 0 2.84.59 3.42.58.59 1.53.59 3.41.59h4.29c1.88 0 2.83 0 3.41-.59.59-.58.59-1.53.59-3.41z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M8.76 19.68h6.48c3.3 0 4.95 0 5.97-1.03 1.03-1.02 1.03-2.67 1.03-5.97v-1.36c0-3.3 0-4.95-1.03-5.97-1.02-1.03-2.67-1.03-5.97-1.03H8.76c-3.3 0-4.95 0-5.97 1.03-1.03 1.02-1.03 2.67-1.03 5.97v1.36c0 3.3 0 4.95 1.03 5.97 1.02 1.03 2.67 1.03 5.97 1.03'
        stroke='currentColor'
      />
      <path
        d='M1.76 9.46h9.62c1.89 0 2.83 0 3.42.59.58.58.58 1.53.58 3.41v6.22'
        stroke='currentColor'
      />
      <path d='M9.98 19.68V9.46' stroke='currentColor' />
    </svg>
  )
}
